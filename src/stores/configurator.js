import { ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useWebConfigStore } from '@/stores/webConfig.js';

export const useConfiguratorStore = defineStore('configuratorStore', () => {
    const webConfigStore = useWebConfigStore();
    const { website } = storeToRefs(webConfigStore);

    const activePageUuid = ref();
    function getActivePage() {
        return website.value?.pages.find((page) => page.uuid === activePageUuid.value);
    }

    const overlay = ref();
    const overlayProps = ref();
    function openOverlay(overlayName, props = {}) {
        overlay.value = overlayName;
        overlayProps.value = props;
    }

    const activeWebComponentUuid = ref();
    function getActiveWebComponent() {
        return getActivePage()?.components.find((component) => component.id === activeWebComponentUuid.value);
    }
    function setActiveWebComponent(id) {
        activeWebComponentUuid.value = id;
        openOverlay('WebComponentConfigurator');
    }
    function deleteWebComponent(confirmMsg) {
        if (confirm(confirmMsg)) {
            getActivePage().components.splice(
                getActivePage().components.indexOf(
                    getActivePage().components.find((component) => component.id === activeWebComponentUuid.value)
                ),
                1
            );

            activeWebComponentUuid.value = null;
            openOverlay(null);
        }
    }

    return {
        activePageUuid,
        getActivePage,
        overlay,
        overlayProps,
        openOverlay,
        activeWebComponentUuid,
        getActiveWebComponent,
        setActiveWebComponent,
        deleteWebComponent,
    };
});
