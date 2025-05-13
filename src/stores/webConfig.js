import sampleData from '/sampleData.json';

import { defineStore } from 'pinia';
import { computed, nextTick, ref } from 'vue';
import axios from 'axios';
import { useRefHistory } from '@vueuse/core';

export const useWebConfigStore = defineStore('webConfig', () => {
    const website = ref({
        settings: {},
        pages: [],
    });

    const { undo, canUndo, redo, canRedo, clear: clearHistory, last } = useRefHistory(website, { deep: true });
    const savedHistoryTimestamp = ref(null);
    const hasUnsavedChanges = computed(() => savedHistoryTimestamp.value !== last.value.timestamp);

    function getWebConfig() {
        return axios.get('/api/webbuilder').then(async (response) => {
            website.value = sampleData;
            // website.value = response.data;

            await nextTick();
            clearHistory();
            savedHistoryTimestamp.value = last.value.timestamp;
        });
    }

    function getWebNav() {
        return website.value?.pages
            .filter((page) => page.navigationItem > 0 && !page.deleted && page.published)
            .sort((a, b) => a.navigationOrder - b.navigationOrder);
    }

    function saveWebConfig() {
        // axios.post('/api/webbuilder', { data: website.value }).then(() => {
        savedHistoryTimestamp.value = last.value.timestamp;
        // });
    }

    function addWebPage(data) {
        // const uuid = crypto.randomUUID();
        const uuid = Date.now();

        website.value.pages.push({
            uuid: uuid,
            title: data.title,
            slug: data.slug,
            visibility: 1,
            navigationItem: data.navItem,
            navigationTitle: data.navTitle,
            navigationOrder: website.value.pages.length + 1,
            deleted: false,
            components: [],
        });

        return uuid;
    }

    return {
        website,
        getWebConfig,
        getWebNav,
        saveWebConfig,
        addWebPage,
        undo,
        canUndo,
        redo,
        canRedo,
        hasUnsavedChanges,
    };
});
