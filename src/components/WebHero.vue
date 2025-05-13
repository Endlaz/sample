<script setup>
import { computed, inject, onMounted, ref } from 'vue';

const viewMode = inject('viewMode');

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: null,
    },
    titleSize: {
        type: String,
        default: 'wc-hero-text-8',
    },
    titleColor: {
        type: String,
        default: '#000000',
    },
    subtitle: {
        type: String,
        default: null,
    },
    subtitleSize: {
        type: String,
        default: 'wc-hero-text-8',
    },
    subtitleColor: {
        type: String,
        default: '#000000',
    },
    paddingX: {
        type: String,
        default: 'wc-hero-px-0',
    },
    paddingY: {
        type: String,
        default: 'wx-hero-py-0',
    },
    backgroundColor: {
        type: String,
        default: '#ffffff',
    },
    backgroundImage: {
        type: [String, Object],
        default: null,
    },
    backgroundSize: {
        type: String,
        default: 'auto',
    },
    backgroundRepeat: {
        type: String,
        default: 'no-repeat',
    },
    backgroundPosition: {
        type: String,
        default: 'center',
    },
    fluidBackground: {
        type: Boolean,
        default: false,
    },
    coverBackground: {
        type: Boolean,
        default: true,
    },
});

const elementWidth = ref(0);
const computedElementWidth = computed(() => elementWidth.value + 'px');
const elementOffset = ref(0);
const computedElementOffset = computed(() => '-' + elementOffset.value + 'px');

function calcFluidElement() {
    let webpageWidth = parseInt(getComputedStyle(document.body).width);
    if (viewMode === 'configurator') {
        webpageWidth = document.getElementById('preview').clientWidth;
    }
    elementWidth.value = webpageWidth;

    const webpageContainerStyle = getComputedStyle(document.getElementById('webpageContainer'));
    const containerWidth = parseInt(webpageContainerStyle.width);
    const containerPaddingLeft = parseInt(webpageContainerStyle.paddingLeft);
    elementOffset.value = (webpageWidth - containerWidth) / 2 + containerPaddingLeft;
}

onMounted(() => {
    calcFluidElement();

    window.addEventListener('resize', () => {
        calcFluidElement();
    });
});

const cssVars = computed(() => {
    const vars = {};

    if (!!props.backgroundImage && typeof props.backgroundImage === 'object') {
        Object.entries(props.backgroundImage).forEach(([size, setting]) => {
            vars[`--bg-image-${size}`] = `url("${setting.src}")`;
        });
    } else if (typeof props.backgroundImage === 'string') {
        vars['--bg-image-small'] = `url(${props.backgroundImage})`;
        vars['--bg-image-medium'] = `url(${props.backgroundImage})`;
        vars['--bg-image-large'] = `url(${props.backgroundImage})`;
        vars['--bg-image-xlarge'] = `url(${props.backgroundImage})`;
        vars['--bg-image-xxlarge'] = `url(${props.backgroundImage})`;
        vars['--bg-image-default'] = `url(${props.backgroundImage})`;
    }

    return vars;
});
</script>

<template>
    <div
        :id="id"
        :style="{
            backgroundColor,
            backgroundSize: coverBackground ? 'cover' : null,
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            width: fluidBackground && elementWidth > 0 ? computedElementWidth : null,
            marginLeft: fluidBackground ? computedElementOffset : null,
            ...cssVars,
        }"
        class="wc-hero col-span-12"
    >
        <div class="mx-auto flex max-w-7xl flex-col items-center" :class="[paddingX, paddingY]">
            <h1 v-if="title" class="text-center" :class="[titleSize]" :style="{ color: titleColor }">
                {{ title }}
            </h1>
            <h3 v-if="subtitle" class="text-center" :class="[subtitleSize]" :style="{ color: subtitleColor }">
                {{ subtitle }}
            </h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wc-hero {
    background-image: var(--bg-image-small);
    @media (min-width: theme('screens.sm')) {
        background-image: var(--bg-image-medium);
    }
    @media (min-width: theme('screens.md')) {
        background-image: var(--bg-image-large);
    }
    @media (min-width: theme('screens.lg')) {
        background-image: var(--bg-image-xlarge);
    }
    @media (min-width: theme('screens.xl')) {
        background-image: var(--bg-image-xxlarge);
    }
    @media (min-width: theme('screens.2xl')) {
        background-image: var(--bg-image-default);
    }
}

.wc-hero-py {
    @for $i from 0 through 50 {
        &-#{$i} {
            padding-top: $i * 1%;
            padding-bottom: $i * 1%;
        }
    }
}

.wc-hero-px {
    @for $i from 0 through 50 {
        &-#{$i} {
            padding-left: $i * 1%;
            padding-right: $i * 1%;
        }
    }
}

/*
 * Font size
 */
.wc-hero-text {
    @for $i from 10 through 100 {
        &-#{$i} {
            font-size: $i * 0.125rem;
            line-height: normal;
        }
    }
}
</style>
