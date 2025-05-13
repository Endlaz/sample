<script setup>
import IconArrowUturnRight from '@/components/icons/IconArrowUturnRight.vue';
import IconArrowUturnLeft from '@/components/icons/IconArrowUturnLeft.vue';
import { useWebConfigStore } from '@/stores/webConfig.js';
import { storeToRefs } from 'pinia';

const webConfigStore = useWebConfigStore();
const { canUndo, canRedo, hasUnsavedChanges } = storeToRefs(webConfigStore);
const { undo, redo, saveWebPage } = webConfigStore;
</script>

<template>
    <div class="flex gap-1">
        <button
            @click="undo"
            class="rounded p-2 hover:cursor-pointer not-disabled:hover:bg-black/10 disabled:text-neutral-500 disabled:hover:cursor-not-allowed"
            :disabled="!canUndo"
        >
            <icon-arrow-uturn-left class="h-auto w-4" />
        </button>

        <button
            @click="redo"
            class="rounded p-2 hover:cursor-pointer not-disabled:hover:bg-black/10 disabled:text-neutral-500 disabled:hover:cursor-not-allowed"
            :disabled="!canRedo"
        >
            <icon-arrow-uturn-right class="h-auto w-4" />
        </button>

        <button
            @click="saveWebPage"
            class="rounded bg-green-600 px-3 py-2 text-sm leading-none text-white hover:cursor-pointer disabled:bg-black/5 disabled:text-neutral-500 disabled:hover:cursor-not-allowed"
            :disabled="!hasUnsavedChanges"
        >
            {{ $t('actions.save') }}
        </button>
    </div>
</template>

<style scoped lang="scss"></style>
