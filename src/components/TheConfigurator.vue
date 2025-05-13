<script>
import WebHero from '@/components/WebHero.vue';
import WebCard from '@/components/WebCard.vue';
import WebText from '@/components/WebText.vue';
import WebYoutube from '@/components/WebYoutube.vue';

export default {
    components: {
        WebHero,
        WebCard,
        WebText,
        WebYoutube,
    },
};
</script>
<script setup>
import TheConfiguratorWebComponentWrapper from '@/components/TheConfiguratorWebComponentWrapper.vue';
import { useConfiguratorStore } from '../stores/configurator.js';
import draggable from 'vuedraggable';
import { useWebConfigStore } from '@/stores/webConfig.js';
import { storeToRefs } from 'pinia';

const configuratorStore = useConfiguratorStore();
const { getActivePage } = configuratorStore;

const webConfig = useWebConfigStore();
const { website } = storeToRefs(webConfig);
const { getWebNav } = webConfig;
</script>
<template>
    <div
        v-if="getActivePage"
        :style="{
            backgroundColor: website.settings.websiteBackgroundColor,
            backgroundImage:
                website.settings.websiteBackgroundImage && `url('${website.settings.websiteBackgroundImage}')`,
            backgroundPosition: website.settings.websiteBackgroundPosition,
            backgroundRepeat: website.settings.websiteBackgroundRepeat,
            backgroundSize: website.settings.websiteBackgroundCover ? 'cover' : 'auto',
        }"
        id="preview"
    >
        <div
            class="mx-auto flex max-w-7xl border-x border-x-zinc-200 bg-white px-4 py-2"
            :class="{
                'flex-col': website.settings.websiteLogoPosition === 'center',
                'flex-row-reverse': website.settings.websiteLogoPosition === 'right',
            }"
        >
            <div
                v-if="website.settings.websiteLogo"
                :class="{
                    'mr-6': website.settings.websiteLogoPosition === 'left',
                    'mb-2 self-center': website.settings.websiteLogoPosition === 'center',
                    'ml-6': website.settings.websiteLogoPosition === 'right',
                    'w-40': website.settings.websiteLogo.endsWith('.svg'),
                }"
            >
                <img :src="website.settings.websiteLogo" class="h-auto max-h-16 max-w-40" />
            </div>
            <div
                class="inline-flex grow flex-wrap items-center space-x-4"
                :class="{
                    'justify-start': website.settings.websiteNavPosition === 'left',
                    'justify-center': website.settings.websiteNavPosition === 'center',
                    'justify-end': website.settings.websiteNavPosition === 'right',
                }"
            >
                <a
                    @click.prevent
                    :href="`/${navItem.slug}`"
                    v-for="navItem in getWebNav()"
                    :key="navItem.uuid"
                    :class="[
                        website.settings.websiteFonts.navigation.fontClass,
                        website.settings.websiteFonts.navigation.fontSize,
                        website.settings.websiteFonts.navigation.fontWeight,
                    ]"
                    >{{ navItem.navigationTitle }}
                </a>
            </div>
        </div>

        <draggable
            v-if="getActivePage()"
            v-model="getActivePage().components"
            item-key="id"
            handle=".drag-handle"
            class="mx-auto grid max-w-7xl grow grid-cols-12 border-x border-x-zinc-200 bg-white"
            :class="[website.settings.websitePaddingX, website.settings.websiteGapX, website.settings.websiteGapY]"
            id="webpageContainer"
        >
            <template #item="{ element }">
                <TheConfiguratorWebComponentWrapper :componentId="element.id" :width="element.props?.width">
                    <component
                        :is="element.name"
                        :id="element.id"
                        v-bind="element.props"
                        :rsvp-enabled="element.name === 'WebRsvp' ? website.settings.rsvpEnabled : null"
                        :heading-font="website.settings.websiteFonts.heading.fontClass"
                        :heading-font-size="website.settings.websiteFonts.heading.fontSize"
                        :heading-font-weight="website.settings.websiteFonts.heading.fontWeight"
                        :body-font="website.settings.websiteFonts.body.fontClass"
                        :body-font-size="website.settings.websiteFonts.body.fontSize"
                        :body-font-weight="website.settings.websiteFonts.body.fontWeight"
                    />
                </TheConfiguratorWebComponentWrapper>
            </template>
        </draggable>

        <div class="mx-auto flex max-w-7xl justify-center border-x border-x-zinc-200 bg-white px-4 py-2">
            <img src="@/assets/logo.svg" class="h-auto w-20" />
        </div>
    </div>
</template>
