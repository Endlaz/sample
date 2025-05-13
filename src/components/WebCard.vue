<script setup>
import { computed, inject } from 'vue';

const viewMode = inject('viewMode');
const props = defineProps({
    id: {
        type: String,
    },
    image: {
        type: [String, Object],
        default: null,
    },
    title: {
        type: String,
        default: null,
    },
    content: {
        type: String,
        default: null,
    },
    textColor: {
        type: String,
        default: '#000000',
    },
    backgroundColor: {
        type: String,
        default: '#ffffff',
    },
    showBorder: {
        type: Boolean,
        default: true,
    },
    borderColor: {
        type: String,
        default: '#999999',
    },
    width: {
        type: String,
        default: 'wc-w-4',
    },
    paddingY: {
        type: String,
        default: 'wc-py-0',
    },
    paddingX: {
        type: String,
        default: 'wc-px-0',
    },
    headingFont: {
        type: String,
        default: 'font-sans',
    },
    headingFontSize: {
        type: String,
        default: 'text-lg',
    },
    headingFontWeight: {
        type: String,
        default: 'font-bold',
    },
    bodyFont: {
        type: String,
        default: 'font-sans',
    },
    bodyFontSize: {
        type: String,
        default: 'text-base',
    },
    bodyFontWeight: {
        type: String,
        default: 'font-normal',
    },
});

const cssVars = computed(() => {
    const vars = {};

    if (!!props.image && typeof props.image === 'object') {
        Object.entries(props.image).forEach(([size, setting]) => {
            vars[`--bg-image-${size}`] = `url("${setting.src}")`;
        });
    } else if (typeof props.image === 'string') {
        vars['--bg-image-small'] = `url(${props.image})`;
        vars['--bg-image-medium'] = `url(${props.image})`;
        vars['--bg-image-large'] = `url(${props.image})`;
        vars['--bg-image-xlarge'] = `url(${props.image})`;
    }

    return vars;
});
</script>
<template>
    <div
        class="wc-card h-full overflow-clip rounded-lg"
        :class="[viewMode !== 'configurator' && width, { border: showBorder }]"
        :style="{ borderColor: showBorder && borderColor }"
    >
        <div
            v-if="image"
            :style="cssVars"
            :class="[!showBorder && 'rounded-lg']"
            class="wc-card__image h-52 bg-cover"
        />
        <div :class="[paddingX, paddingY]" :style="{ backgroundColor: backgroundColor, color: textColor }">
            <h3 v-if="title" :class="[headingFont, headingFontWeight, headingFontSize]">
                {{ title }}
            </h3>
            <div v-if="content" v-html="content" :class="[bodyFont, bodyFontSize, bodyFontWeight]"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wc-card__image {
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
}
</style>
