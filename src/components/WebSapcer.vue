<script setup>
import { computed, inject } from 'vue';

const viewMode = inject('viewMode');

const props = defineProps({
    width: {
        type: String,
        default: 'wc-w-1',
    },
    backgroundColor: {
        type: String,
        default: '#ffffff',
    },
    backgroundImage: {
        type: String,
        default: null,
    },
    backgroundRepeat: {
        type: String,
        default: 'repeat',
    },
    coverBackground: {
        type: Boolean,
        default: true,
    },
    backgroundPosition: {
        type: String,
        default: 'center center',
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
        class="wc-spacer h-full min-h-4"
        :class="[viewMode !== 'configurator' && width]"
        :style="{
            backgroundColor,
            backgroundSize: coverBackground ? 'cover' : null,
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            ...cssVars,
        }"
    ></div>
</template>

<style lang="scss" scoped>
.wc-spacer {
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
