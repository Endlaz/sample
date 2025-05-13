import {
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    width,
} from './generalComponentConfigurationOptions.js';

export function useWebSpacerConfigurationDictionary() {
    const componentName = 'WebSpacer';

    return {
        name: componentName,
        defaultValue: {
            // id: 'spacer-' + crypto.randomUUID(),
            id: 'spacer-' + Date.now(),
            name: componentName,
            props: {
                width: 'wc-w-12',
                backgroundColor: '#ffffff',
                backgroundImage: null,
                backgroundRepeat: 'repeat',
                coverBackground: true,
                backgroundPosition: 'center center',
            },
        },
        fields: [
            width,
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
