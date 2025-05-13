<script setup>
import IconPlus from '@/components/icons/IconPlus.vue';
import IconPencil from '@/components/icons/IconPencil.vue';
import IconChevronUpDown from '@/components/icons/IconChevronUpDown.vue';
import { useConfiguratorStore } from '../stores/configurator.js';

const configuratorStore = useConfiguratorStore();
const { openOverlay, setActiveWebComponent } = configuratorStore;

const props = defineProps({
    componentId: {
        type: String,
        default: null,
    },
    width: {
        type: String,
        default: 'col-span-12',
    },
});
</script>

<template>
    <div
        class="group relative hover:z-[1] hover:min-h-14 hover:outline hover:outline-2 hover:outline-sky-600"
        :class="[width]"
    >
        <div class="absolute -top-5 left-1/2 z-10 hidden -translate-x-1/2 group-hover:block">
            <button class="rounded-full bg-green-500 p-2 shadow-md hover:bg-green-600">
                <IconPlus
                    class="w-6 stroke-white"
                    stroke-width="3"
                    @click="
                        openOverlay('SelectComponent', {
                            currentComponentId: componentId,
                        })
                    "
                />
            </button>
        </div>

        <div class="absolute top-2 right-3 hidden gap-3 group-hover:flex">
            <button
                class="rounded-lg border border-zinc-100 bg-white p-2 shadow-md hover:border-zinc-200 hover:bg-zinc-100"
                @click="setActiveWebComponent(componentId)"
            >
                <IconPencil class="w-4" stroke-width="3" />
            </button>

            <button
                class="rounded-lg border border-zinc-100 bg-white p-2 shadow-md hover:cursor-grab hover:border-zinc-200 hover:bg-zinc-100 active:cursor-grabbing"
            >
                <IconChevronUpDown class="drag-handle w-4" stroke-width="3" />
            </button>
        </div>

        <slot></slot>

        <div class="absolute -bottom-5 left-1/2 z-10 hidden -translate-x-1/2 group-hover:block">
            <button class="rounded-full bg-green-500 p-2 shadow-md hover:bg-green-600">
                <IconPlus
                    class="w-6 stroke-white"
                    stroke-width="3"
                    @click="
                        openOverlay('SelectComponent', {
                            currentComponentId: componentId,
                            indexAfter: 1,
                        })
                    "
                />
            </button>
        </div>
    </div>
</template>

<style lang="scss"></style>
