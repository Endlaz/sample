import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import { createI18n } from 'vue-i18n';
import en from '/lang/en.json';
import nl from '/lang/nl.json';
import InputText from '@/components/inputs/InputText.vue';
import InputSelect from '@/components/inputs/InputSelect.vue';

const i18n = createI18n({
    legacy: false,
    locale: 'nl',
    fallbackLocale: 'en',
    messages: { en, nl },
});

const app = createApp(App);
app.provide('viewMode', 'configurator');
app.use(createPinia());
app.use(i18n);
app.component('InputText', InputText).component('InputSelect', InputSelect);

app.mount('#app');
