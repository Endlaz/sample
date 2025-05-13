<script setup>
import { ref } from 'vue';
import { InputSelectProps } from '@/dictionaries/input.js';
import InputError from '@/components/inputs/InputError.vue';

const props = defineProps({
    ...InputSelectProps,
    translateOptions: {
        type: Boolean,
        default: false,
    },
    labelClasses: {
        type: [String, Array, Object],
        default: null,
    },
});

const inputElement = ref(null);
const inputValue = defineModel({ default: '' });
</script>

<template>
    <div class="mb-4 block">
        <label v-if="label" :for="id" class="mb-1 block text-sm font-bold" :class="labelClasses">
            {{ label }}
        </label>
        <p v-if="info" class="mb-1 text-sm">{{ info }}</p>
        <select
            ref="inputElement"
            v-model="inputValue"
            :id="id"
            :name="name"
            :disabled="disabled"
            :required="required"
            :readonly="readonly"
            :multiple="multiple"
            class="w-full cursor-pointer rounded border border-neutral-300 bg-white p-2 pr-4 disabled:bg-gray-100 disabled:text-gray-400 disabled:italic"
        >
            <option value="" class="hidden" disabled>{{ placeholder }}</option>
            <option v-for="option in options" :value="option.value" :key="option.value">
                {{ translateOptions ? $t(option.label) : option.label }}
            </option>
        </select>
        <p v-if="helpText" class="text-sm">{{ helpText }}</p>
        <input-error :message="error"></input-error>
    </div>
</template>
