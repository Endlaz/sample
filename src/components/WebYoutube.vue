<script setup>
import { computed, inject, onMounted, ref, watch } from 'vue';

const viewMode = inject('viewMode');

const props = defineProps({
    youtubeUrl: {
        type: String,
        required: true,
        default: '',
    },
    width: {
        type: String,
        default: 'wc-w-12',
    },
    paddingY: {
        type: String,
        default: 'wc-py-0',
    },
    paddingX: {
        type: String,
        default: 'wc-px-0',
    },
    backgroundColor: {
        type: String,
        default: '#ffffff',
    },
    backgroundImage: {
        type: [String, Object],
        default: null,
    },
    backgroundRepeat: {
        type: String,
        default: 'repeat',
    },
    coverBackground: {
        type: Boolean,
        default: true,
    },
    backgroundPosition: {
        type: String,
        default: 'center center',
    },
});

const cssVars = computed(() => {
    const vars = {};

    if (!!props.backgroundImage && typeof props.backgroundImage === 'object') {
        Object.entries(props.backgroundImage).forEach(([size, setting]) => {
            vars[`--bg-image-${size}`] = `url("${setting.src}")`;
        });
    } else if (typeof props.image === 'string') {
        vars['--bg-image-small'] = `url(${props.backgroundImage})`;
        vars['--bg-image-medium'] = `url(${props.backgroundImage})`;
        vars['--bg-image-large'] = `url(${props.backgroundImage})`;
        vars['--bg-image-xlarge'] = `url(${props.backgroundImage})`;
    }

    return vars;
});

let youtubeId = ref('');
let youtubeEmbedUrl = ref('');
let youtubeIframe = ref(null);
let validYoutubeUrl = ref(false);
let youtubeConsent = ref(false);

function generateEmbedUrl() {
    if (props.youtubeUrl) {
        const youtubeEmbedTemplate = 'https://www.youtube-nocookie.com/embed/';
        const url = props.youtubeUrl.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        const YId = url[2] !== undefined ? url[2].split(/[^0-9a-z_/\\-]/i)[0] : url[0];

        if (YId !== url[0]) {
            validYoutubeUrl.value = true;
            youtubeId.value = YId;
            youtubeEmbedUrl.value = youtubeEmbedTemplate.concat(YId);
        }
    }
}

function allowYoutube() {
    localStorage.setItem('youtube-consent', 'true');
    youtubeConsent.value = true;
    setYoutubeIframe();
}

function disallowYoutube() {
    localStorage.removeItem('youtube-consent');
    youtubeConsent.value = false;
    setYoutubeIframe();
}

function setYoutubeIframe() {
    youtubeIframe.value.src = youtubeConsent.value ? youtubeEmbedUrl.value : '';
}

watch(
    () => props.youtubeUrl,
    () => generateEmbedUrl()
);

onMounted(() => {
    youtubeConsent.value = !!localStorage.getItem('youtube-consent');
    generateEmbedUrl();
    setYoutubeIframe();
});
</script>
<template>
    <div
        class="wc-youtube"
        :class="[viewMode !== 'configurator' && width, paddingX, paddingY]"
        :style="{
            backgroundColor,
            backgroundSize: coverBackground ? 'cover' : null,
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            ...cssVars,
        }"
    >
        <iframe
            v-show="validYoutubeUrl && youtubeConsent"
            class="aspect-video"
            width="100%"
            height="100%"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ref="youtubeIframe"
        ></iframe>

        <div
            v-if="!youtubeConsent"
            class="aspect-video bg-cover bg-center text-center"
            :style="{
                backgroundImage: youtubeId ? `url(https://img.youtube.com/vi/${youtubeId}/0.jpg)` : null,
            }"
        >
            <div class="flex h-full w-full flex-col items-center justify-center bg-black/75 p-4 text-white">
                <p>
                    <strong>{{ $t('webComponent.webYoutube.consent.title') }}</strong>
                </p>
                <p v-html="$t('webComponent.webYoutube.consent.message')"></p>
                <button @click="allowYoutube" class="mt-4 rounded bg-orange-500 px-4 py-2">
                    {{ $t('webComponent.webYoutube.consent.button') }}
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wc-youtube {
    background-image: var(--bg-image-small);
    @media (min-width: theme('screens.sm')) {
        background-image: var(--bg-image-medium);
    }
    @media (min-width: theme('screens.md')) {
        background-image: var(--bg-image-large);
    }
    @media (min-width: theme('screens.lg')) {
        background-image: var(--bg-image-xlarge);
    }
}
</style>
