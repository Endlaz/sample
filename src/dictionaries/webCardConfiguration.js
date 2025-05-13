import { backgroundColor, paddingX, paddingY, width } from './generalComponentConfigurationOptions.js';

export function useWebCardConfigurationDictionary() {
    const componentName = 'WebCard';

    return {
        name: componentName,
        defaultValue: {
            // id: 'card-' + crypto.randomUUID(),
            id: 'card-' + Date.now(),
            name: componentName,
            props: {
                image: null,
                title: 'Card title',
                content: 'Card content',
                textColor: '#000000',
                backgroundColor: '#ffffff',
                showBorder: true,
                borderColor: '#999999',
                width: 'wc-w-4',
                paddingX: 'wc-px-1',
                paddingY: 'wc-py-1',
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
                name: 'title',
                component: 'InputText',
                props: {},
            },
            {
                name: 'content',
                component: 'InputTextarea',
                props: {},
            },
            {
                name: 'textColor',
                component: 'InputColorPicker',
                props: {},
            },
            backgroundColor,
            {
                name: 'showBorder',
                component: 'InputCheckbox',
                props: {},
            },
            {
                name: 'borderColor',
                component: 'InputColorPicker',
                props: {},
            },
            width,
            paddingY,
            paddingX,
        ],
    };
}
