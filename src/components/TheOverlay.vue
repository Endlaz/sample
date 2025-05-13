<script>
import ConfigWebComponent from '@/components/ConfigWebComponent.vue';

export default {
    components: {
        WebComponentConfigurator: ConfigWebComponent,
    },
};
</script>
<script setup>
import { useConfiguratorStore } from '@/stores/configurator.js';
import { storeToRefs } from 'pinia';

const configuratorStore = useConfiguratorStore();
const { overlay, overlayProps } = storeToRefs(configuratorStore);
const { openOverlay } = configuratorStore;
</script>

<template>
    <Teleport to="body">
        <div
            class="fixed top-0 left-0 z-50 h-full w-96 overflow-y-scroll border border-zinc-200 bg-zinc-100 p-2"
            v-if="overlay"
        >
            <component :is="overlay" v-bind="overlayProps">
                <template #close>
                    <button @click="openOverlay(null)">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            class="w-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </template>
            </component>
        </div>
    </Teleport>
</template>

<style scoped lang="scss"></style>
