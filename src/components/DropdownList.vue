<script setup>
import { ref } from 'vue';
import IconChevronDown from '@/components/icons/IconChevronDown.vue';

const isOpen = ref(false);
</script>

<template>
    <div class="relative">
        <button
            @click="isOpen = !isOpen"
            class="flex w-full justify-between gap-4 rounded border border-neutral-200 px-3 py-2 text-sm leading-none whitespace-nowrap hover:cursor-pointer hover:border-neutral-400 hover:bg-neutral-100"
        >
            <span class="overflow-hidden overflow-ellipsis">
                <slot name="trigger"></slot>
            </span>
            <IconChevronDown class="h-auto w-3 shrink-0 stroke-[0.2rem]" :class="{ 'rotate-180': isOpen }" />
        </button>

        <div
            v-show="isOpen"
            class="absolute left-1/2 z-10 mt-1 w-fit max-w-72 min-w-full -translate-x-1/2 overflow-hidden rounded border border-black/5 bg-white shadow"
            tabindex="-1"
            @click="isOpen = false"
        >
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
