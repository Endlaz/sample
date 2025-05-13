import { createCustomClassLoop } from '@/helpers/formatters.js';
import {
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
} from './generalComponentConfigurationOptions.js';

export function useWebHeroConfigurationDictionary() {
    const componentName = 'WebHero';

    return {
        name: componentName,
        defaultValue: {
            // id: 'hero-' + crypto.randomUUID(),
            id: 'hero-' + Date.now(),
            name: componentName,
            props: {
                title: 'Your title',
                subtitle: 'Your subtitle',
                titleSize: 'wc-hero-text-48',
                titleColor: '#000000',
                subtitleSize: 'wc-hero-text-24',
                subtitleColor: '#000000',
                backgroundColor: '#f7f7f7',
                backgroundImage: null,
                backgroundRepeat: 'repeat',
                coverBackground: true,
                fluidBackground: true,
                backgroundPosition: 'center center',
                paddingY: 'wc-hero-py-5',
                paddingX: 'wc-hero-px-0',
            },
        },
        fields: [
            {
                name: 'title',
                component: 'InputText',
                props: {},
            },
            {
                name: 'titleSize',
                component: 'InputSlider',
                props: {
                    options: createCustomClassLoop('wc-hero-text-', 10, 100),
                },
            },
            {
                name: 'titleColor',
                component: 'InputColorPicker',
                props: {},
            },
            {
                name: 'subtitle',
                component: 'InputText',
                props: {
                    max: 10,
                    min: 0,
                },
            },
            {
                name: 'subtitleSize',
                component: 'InputSlider',
                props: {
                    options: createCustomClassLoop('wc-hero-text-', 10, 80),
                },
            },
            {
                name: 'subtitleColor',
                component: 'InputColorPicker',
                props: {},
            },
            {
                name: 'paddingY',
                component: 'InputSlider',
                props: {
                    options: createCustomClassLoop('wc-hero-py-', 0, 50),
                },
            },
            {
                name: 'paddingX',
                component: 'InputSlider',
                props: {
                    options: createCustomClassLoop('wc-hero-px-', 0, 50),
                },
            },
            backgroundColor,
            backgroundImage,
            {
                name: 'fluidBackground',
                component: 'InputCheckbox',
                props: {},
            },
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
