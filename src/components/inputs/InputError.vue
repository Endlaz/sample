<script setup>
const props = defineProps({
    message: {
        type: String,
        default: null,
    },
});
</script>

<template>
    <p v-if="message" class="text-xs text-red-600">
        {{ message }}
    </p>
</template>

<style scoped lang="scss"></style>
