<script setup>
import TheControlbar from '@/components/TheControlbar.vue';
import TheConfigurator from '@/components/TheConfigurator.vue';
import { useWebConfigStore } from '@/stores/webConfig.js';
import { onMounted } from 'vue';
import TheOverlay from '@/components/TheOverlay.vue';
import { useConfiguratorStore } from '@/stores/configurator.js';

const webConfigStore = useWebConfigStore();
const configuratorStore = useConfiguratorStore();
onMounted(() => {
    webConfigStore.getWebConfig().then(() => {
        configuratorStore.activePageUuid = webConfigStore.website?.pages[0]?.uuid;
    });
});
</script>

<template>
    <div>
        <TheControlbar />
        <TheConfigurator />
        <TheOverlay />
    </div>
</template>

<style lang="scss" scoped></style>
