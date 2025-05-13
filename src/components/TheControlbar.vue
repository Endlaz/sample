<script setup>
import ControlHistory from '@/components/ControlHistory.vue';
import ControlSettings from '@/components/ControlSettings.vue';
import ControlActivePage from '@/components/ControlActivePage.vue';
</script>

<template>
    <div class="flex justify-between border-b border-b-neutral-200 bg-white p-3">
        <ControlSettings />
        <ControlActivePage />
        <ControlHistory />
    </div>
</template>

<style scoped lang="scss"></style>
