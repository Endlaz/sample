import { paddingX, paddingY, width } from './generalComponentConfigurationOptions.js';
import { createCustomClassLoop } from '@/helpers/formatters.js';

export function useWebImageConfigurationDictionary() {
    const componentName = 'WebImage';

    return {
        name: componentName,
        defaultValue: {
            // id: 'image-' + crypto.randomUUID(),
            id: 'image-' + Date.now(),
            name: componentName,
            props: {
                image: null,
                imageRadius: 'wc-img-radius-0',
                width: 'wc-w-12',
                paddingX: 'wc-px-0',
                paddingY: 'wc-py-0',
            },
        },
        fields: [
            {
                name: 'image',
                component: 'InputFile',
                props: {
                    multiSource: true,
                },
            },
            {
                name: 'imageRadius',
                component: 'InputSlider',
                props: {
                    options: createCustomClassLoop('wc-img-radius-', 0, 18),
                    showMarks: true,
                },
            },
            width,
            paddingY,
            paddingX,
        ],
    };
}
