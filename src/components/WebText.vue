<script setup>
import { computed, inject } from 'vue';

const viewMode = inject('viewMode');

const props = defineProps({
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
    paddingX: {
        type: String,
        default: 'wc-px-0',
    },
    paddingY: {
        type: String,
        default: 'wc-py-0',
    },
    width: {
        type: String,
        default: 'wc-w-12',
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
    coverBackground: {
        type: Boolean,
        default: true,
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

    if (!!props.backgroundImage && typeof props.backgroundImage === 'object') {
        Object.entries(props.backgroundImage).forEach(([size, setting]) => {
            vars[`--bg-image-${size}`] = `url("${setting.src}")`;
        });
    } else if (typeof props.image === 'string') {
        vars['--bg-image-small'] = `url(${props.backgroundImage})`;
        vars['--bg-image-medium'] = `url(${props.backgroundImage})`;
        vars['--bg-image-large'] = `url(${props.backgroundImage})`;
        vars['--bg-image-xlarge'] = `url(${props.backgroundImage})`;
    }

    return vars;
});
</script>

<template>
    <div
        class="wc-text"
        :class="[paddingY, paddingX, viewMode !== 'configurator' && width]"
        :style="{
            backgroundColor,
            backgroundSize: coverBackground ? 'cover' : null,
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            color: textColor,
            ...cssVars,
        }"
    >
        <h1 v-if="title" :class="[headingFont, headingFontSize, headingFontWeight]">
            {{ title }}
        </h1>
        <p v-if="content" v-html="content" :class="[bodyFont, bodyFontSize, bodyFontWeight]"></p>
    </div>
</template>

<style lang="scss" scoped>
.wc-text {
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
