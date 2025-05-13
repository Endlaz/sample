<script setup>
const props = defineProps({
    tag: {
        type: String,
        default: 'div',
    },
});
</script>

<template>
    <component :is="tag" class="block w-full overflow-hidden p-3 text-left overflow-ellipsis hover:bg-neutral-100">
        <slot></slot>
    </component>
</template>

<style scoped lang="scss"></style>
