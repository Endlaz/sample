<script setup>
const props = defineProps({
    showModal: {
        type: Boolean,
        default: false,
    },
    showCancelButton: {
        type: Boolean,
        default: true,
    },
    modalClasses: {
        type: [String, Array, Object],
        default: null,
    },
    modalBodyClasses: {
        type: [String, Array, Object],
        default: null,
    },
    modalTitleClasses: {
        type: [String, Array, Object],
        default: null,
    },
    modalContentClasses: {
        type: [String, Array, Object],
        default: null,
    },
    modalFooterClasses: {
        type: [String, Array, Object],
        default: null,
    },
});
</script>

<template>
    <div class="relative z-50" v-if="showModal">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg"
                    :class="modalClasses"
                >
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" :class="modalBodyClasses">
                        <h3
                            v-if="$slots.title"
                            class="text-base leading-6 font-semibold text-gray-900"
                            :class="modalTitleClasses"
                        >
                            <slot name="title"></slot>
                        </h3>

                        <div :class="[{ 'mt-2': $slots.title }, modalContentClasses]" class="text-sm text-gray-500">
                            <slot></slot>
                        </div>
                    </div>

                    <div
                        v-if="$slots.footer || showCancelButton"
                        class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                        :class="modalFooterClasses"
                    >
                        <slot name="footer"> </slot>
                        <button
                            v-if="showCancelButton"
                            type="button"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            @click="$emit('close')"
                        >
                            {{ $t('actions.cancel') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
