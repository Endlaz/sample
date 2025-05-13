<script setup>
import { useConfiguratorStore } from '../stores/configurator.js';
import { useWebComponentConfiguratorDictionary } from '../dictionaries/webComponentConfigurator.js';
import { storeToRefs } from 'pinia';

const configuratorStore = useConfiguratorStore();
const { activeWebComponentUuid } = storeToRefs(configuratorStore);
const { getActiveWebComponent, deleteWebComponent } = configuratorStore;
const componentDictionary = useWebComponentConfiguratorDictionary();
</script>

<template>
    <div class="-mx-2 -mt-2 mb-2 flex border-b border-b-zinc-300">
        <div class="grow border-r border-r-zinc-300 p-2">
            {{ $t('config.webComponentConfigurator.title') }}
        </div>
        <div class="shrink-0 p-2 leading-none">
            <slot name="close"></slot>
        </div>
    </div>
    <template v-if="activeWebComponentUuid && componentDictionary[getActiveWebComponent().name]">
        <template v-for="(componentField, index) in componentDictionary[getActiveWebComponent().name].fields">
            <component
                :key="componentField.id ?? index"
                :id="getActiveWebComponent().id + '-' + componentField.name + '-' + (componentField.id ?? index)"
                v-if="componentField.component"
                :is="componentField.component"
                v-model="getActiveWebComponent().props[componentField.name]"
                v-bind="componentField.props"
                :label="$t(`form.label.${componentField.name}`)"
            />
        </template>

        <button
            @click="deleteWebComponent($t('actions.deleteComponentConfirmMessage'))"
            class="w-full rounded bg-red-600 px-3 py-1 text-center font-semibold text-white"
        >
            {{ $t('actions.deleteComponent') }}
        </button>
    </template>
</template>
