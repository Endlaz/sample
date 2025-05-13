<script setup>
import DropdownList from '@/components/DropdownList.vue';
import DropdownListItem from '@/components/DropdownListItem.vue';
import { storeToRefs } from 'pinia';
import { useWebConfigStore } from '@/stores/webConfig.js';
import { useConfiguratorStore } from '@/stores/configurator.js';
import ConfigNewPage from '@/components/ConfigNewPage.vue';

const webConfigStore = useWebConfigStore();
const { website } = storeToRefs(webConfigStore);

const configuratorStore = useConfiguratorStore();
const { activePageUuid } = storeToRefs(configuratorStore);
const { getActivePage } = configuratorStore;
</script>

<template>
    <DropdownList class="w-36">
        <template #trigger>{{ getActivePage()?.title }}</template>

        <template #content>
            <div class="text-sm whitespace-nowrap">
                <ConfigNewPage />
                <DropdownListItem
                    v-for="page in website.pages"
                    :key="page.uuid"
                    tag="button"
                    @click="activePageUuid = page.uuid"
                >
                    {{ page.title }}
                </DropdownListItem>
            </div>
        </template>
    </DropdownList>
</template>

<style scoped lang="scss"></style>
