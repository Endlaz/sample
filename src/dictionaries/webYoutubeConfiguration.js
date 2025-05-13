import { backgroundColor, paddingX, paddingY, width } from './generalComponentConfigurationOptions.js';

export function useWebYoutubeConfigurationDictionary() {
    const componentName = 'WebYoutube';

    return {
        name: componentName,
        title: 'Youtube component',
        description: 'Youtube component description',
        defaultValue: {
            // id: 'youtube-' + crypto.randomUUID(),
            id: 'youtube-' + Date.now(),
            name: componentName,
            props: {
                youtubeUrl: '',
                paddingX: 'wc-px-0',
                paddingY: 'wc-py-0',
                width: 'wc-w-12',
                backgroundColor: '#ffffff',
            },
        },
        fields: [
            {
                name: 'youtubeUrl',
                component: 'InputText',
                props: {},
            },
            width,
            paddingY,
            paddingX,
            backgroundColor,
        ],
    };
}
