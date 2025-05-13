<script setup>
import { InputTextProps } from '@/dictionaries/input.js';
import InputError from '@/components/inputs/InputError.vue';

const props = defineProps({
    ...InputTextProps,
    classes: {
        type: [String, Array, Object],
        default: null,
    },
    labelClasses: {
        type: [String, Array, Object],
        default: null,
    },
});

const inputValue = defineModel();
</script>

<template>
    <div class="mb-4 block" :class="classes">
        <label v-if="label" :for="id" class="mb-1 block text-sm font-bold" :class="labelClasses">
            {{ label }}
        </label>
        <p v-if="info" class="mb-1 text-sm">{{ info }}</p>
        <input
            type="text"
            :id="id"
            :name="name"
            :disabled="disabled"
            :readonly="readonly"
            :required="required"
            :minlength="minlength"
            :maxlength="maxlength"
            :placeholder="placeholder"
            v-model="inputValue"
            class="w-full rounded border border-neutral-300 bg-white p-2 disabled:bg-gray-100 disabled:text-gray-400 disabled:italic"
        />
        <p v-if="helpText" class="text-sm">{{ helpText }}</p>

        <input-error :message="error"></input-error>
    </div>
</template>

<style scoped lang="scss"></style>
