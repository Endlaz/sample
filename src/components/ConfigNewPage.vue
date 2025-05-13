<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import DialogModal from '@/components/DialogModal.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import InputText from '@/components/inputs/InputText.vue';
import InputSelect from '@/components/inputs/InputSelect.vue';
import { useWebConfigStore } from '@/stores/webConfig.js';
import { storeToRefs } from 'pinia';
import { useConfiguratorStore } from '@/stores/configurator.js';

const { t: trans } = useI18n();
const showModal = ref(false);
const navItemOptions = [
    { value: 0, label: trans('form.options.navItem.hidden') },
    { value: 1, label: trans('form.options.navItem.public') },
];

const getInitialFormData = () => ({
    title: '',
    slug: '',
    navItem: 1,
    navTitle: '',
});
const formData = ref(getInitialFormData());
function generateSlug() {
    console.log(formData.value);
    formData.value.slug = formData.value.title
        .replace(/[^a-z0-9_]+/gi, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase();
}
function transformSlug() {
    formData.value.slug = formData.value.slug.replace(/[^a-z0-9_]+/gi, '-').toLowerCase();
}

watch(
    () => formData.value.title,
    (newValue, oldValue) => {
        if (formData.value.navTitle === oldValue) {
            formData.value.navTitle = newValue;
        }
    }
);

const { addWebPage } = useWebConfigStore();
const { activePageUuid } = storeToRefs(useConfiguratorStore());
function addPage() {
    const newPageUuid = addWebPage(formData.value);
    formData.value = getInitialFormData();
    showModal.value = false;
    activePageUuid.value = newPageUuid;
}
</script>

<template>
    <button
        @click="showModal = true"
        class="flex w-full cursor-pointer gap-2 overflow-hidden p-3 text-left overflow-ellipsis text-sky-500 hover:bg-neutral-100"
    >
        <IconPlus class="h-auto w-4" />
        {{ $t('config.new_page.button.label') }}
    </button>

    <teleport to="body">
        <DialogModal
            :showModal
            @close="
                showModal = false;
                formData = getInitialFormData();
            "
        >
            <template #title>{{ $t('config.new_page.modal.title') }}</template>

            <template #default>
                <form @submit.prevent="addPage" id="addPageForm">
                    <InputText
                        id="page-title"
                        :label="$t('form.label.title')"
                        v-model="formData.title"
                        @input="generateSlug"
                        required
                    />
                    <InputText
                        id="page-url"
                        :label="$t('form.label.url')"
                        v-model="formData.slug"
                        @input="transformSlug"
                        required
                    />
                    <InputSelect
                        id="navItem"
                        :label="$t('form.label.navItem')"
                        :options="navItemOptions"
                        v-model="formData.navItem"
                    />
                    <InputText
                        v-if="formData.navItem"
                        id="nav-title"
                        :label="$t('form.label.navTitle')"
                        v-model="formData.navTitle"
                    />
                </form>
            </template>

            <template #footer>
                <button
                    form="addPageForm"
                    type="submit"
                    class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                >
                    {{ $t('actions.add') }}
                </button>
            </template>
        </DialogModal>
    </teleport>
</template>

<style scoped lang="scss"></style>
