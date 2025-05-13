import {
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    paddingX,
    paddingY,
    width,
} from './generalComponentConfigurationOptions.js';

export function useWebTextConfigurationDictionary() {
    const componentName = 'WebText';

    return {
        name: componentName,
        defaultValue: {
            // id: 'text-' + crypto.randomUUID(),
            id: 'text-' + Date.now(),
            name: componentName,
            props: {
                title: 'Your title',
                content: 'Your content',
                textColor: '#000000',
                paddingX: 'wc-px-0',
                paddingY: 'wc-py-0',
                width: 'wc-w-12',
                backgroundColor: '#ffffff',
                backgroundImage: null,
                backgroundRepeat: 'repeat',
                coverBackground: true,
                backgroundPosition: 'center center',
            },
        },
        fields: [
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
            width,
            paddingY,
            paddingX,
            backgroundColor,
            backgroundImage,
            {
                name: 'coverBackground',
                component: 'InputCheckbox',
                props: {},
            },
            backgroundRepeat,
            backgroundPosition,
        ],
    };
}
