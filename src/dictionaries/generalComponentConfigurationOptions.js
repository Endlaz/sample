import { createCustomClassLoop } from '@/helpers/formatters.js';

export const width = {
    name: 'width',
    component: 'InputSelect',
    props: {
        options: [
            {
                label: '12/12 (100%)',
                value: 'wc-w-12',
            },
            {
                label: '11/12 (91,6%)',
                value: 'wc-w-11',
            },
            {
                label: '10/12 (83,3%)',
                value: 'wc-w-10',
            },
            {
                label: '9/12 (75%)',
                value: 'wc-w-9',
            },
            {
                label: '8/12 (66,6%)',
                value: 'wc-w-8',
            },
            {
                label: '7/12 (58,3%)',
                value: 'wc-w-7',
            },
            {
                label: '6/12 (50%)',
                value: 'wc-w-6',
            },
            {
                label: '5/12 (41,6%)',
                value: 'wc-w-5',
            },
            {
                label: '4/12 (33,3%)',
                value: 'wc-w-4',
            },
            {
                label: '3/12 (25%)',
                value: 'wc-w-3',
            },
            {
                label: '2/12 (16,6%)',
                value: 'wc-w-2',
            },
            {
                label: '1/12 (8,3%)',
                value: 'wc-w-1',
            },
        ],
    },
};

export const paddingY = {
    name: 'paddingY',
    component: 'InputSlider',
    props: {
        options: createCustomClassLoop('wc-py-', 0, 25),
    },
};

export const paddingX = {
    name: 'paddingX',
    component: 'InputSlider',
    props: {
        options: createCustomClassLoop('wc-px-', 0, 25),
    },
};

export const backgroundColor = {
    name: 'backgroundColor',
    component: 'InputColorPicker',
    props: {},
};

export const backgroundImage = {
    name: 'backgroundImage',
    component: 'InputFile',
    props: {
        multiSource: true,
    },
};

export const backgroundRepeat = {
    name: 'backgroundRepeat',
    component: 'InputSelect',
    props: {
        translateOptions: true,
        options: [
            {
                label: 'No repeat',
                value: 'no-repeat',
            },
            {
                label: 'Repeat',
                value: 'repeat',
            },
            {
                label: 'Horizontal',
                value: 'repeat-x',
            },
            {
                label: 'Vertical',
                value: 'repeat-y',
            },
        ],
    },
};

export const backgroundPosition = {
    name: 'backgroundPosition',
    component: 'InputSelect',
    props: {
        translateOptions: true,
        options: [
            {
                label: 'Top/Left',
                value: 'top left',
            },
            {
                label: 'Top/Center',
                value: 'top center',
            },
            {
                label: 'Top/Right',
                value: 'top right',
            },
            {
                label: 'Middle/Left',
                value: 'center left',
            },
            {
                label: 'Centered',
                value: 'center center',
            },
            {
                label: 'Middle/Right',
                value: 'center right',
            },
            {
                label: 'Bottom/Left',
                value: 'bottom left',
            },
            {
                label: 'Bottom/Center',
                value: 'bottom center',
            },
            {
                label: 'Bottom/Right',
                value: 'bottom right',
            },
        ],
    },
};

export const backgroundSize = {};
