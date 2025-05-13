<script setup>
import { computed, inject } from 'vue';

const viewMode = inject('viewMode');

const props = defineProps({
    image: {
        type: [String, Object],
        default: null,
    },
    imageRadius: {
        type: String,
        default: 'rounded-none',
    },
    width: {
        type: String,
        default: 'wc-w-12',
    },
    paddingX: {
        type: String,
        default: 'wc-px-0',
    },
    paddingY: {
        type: String,
        default: 'wc-py-0',
    },
});

const srcSet = computed(() => {
    const srcSet = [];

    if (!!props.image && typeof props.image === 'object') {
        Object.values(props.image).forEach((image) => {
            srcSet.push(`${image.src} ${image.width}w`);
        });
    }

    return srcSet.toString();
});
</script>
<template>
    <div
        class="wc-image"
        :class="[viewMode === 'configurator' && 'min-h-10', viewMode !== 'configurator' && width, paddingX, paddingY]"
    >
        <img v-if="typeof image === 'string'" :src="image" :class="[imageRadius]" loading="lazy" />
        <img
            v-else-if="!!image && typeof image === 'object'"
            :src="image['thumb'].src ?? ''"
            :srcset="srcSet"
            :class="[imageRadius]"
            width="100%"
            loading="lazy"
        />
    </div>
</template>
