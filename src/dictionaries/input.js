export const InputProps = {
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        default: null,
    },
    label: {
        type: String,
        default: null,
    },
    info: {
        type: String,
        default: null,
    },
    helpText: {
        type: String,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    readonly: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
    error: {
        type: String,
        default: null,
    },
};

export const InputTextProps = {
    ...InputProps,
    minlength: {
        type: String,
        default: null,
    },
    maxlength: {
        type: String,
        default: null,
    },
    placeholder: {
        type: String,
        default: null,
    },
};

export const InputNumberProps = {
    ...InputProps,
    min: {
        type: Number,
        default: null,
    },
    max: {
        type: Number,
        default: null,
    },
    placeholder: {
        type: String,
        default: null,
    },
};

export const InputTextareaProps = {
    ...InputTextProps,
    cols: {
        type: String,
        default: null,
    },
    rows: {
        type: String,
        default: null,
    },
    resize: {
        type: Boolean,
        default: true,
    },
};

export const InputRadioProps = {
    ...InputProps,
    options: {
        type: Array,
        default: [],
    },
};

export const InputCheckboxProps = {
    ...InputProps,
    value: {
        type: [String, Number, Boolean],
        default: true,
    },
    checked: {
        type: Boolean,
        default: false,
    },
    hasBottomPadding: {
        type: Boolean,
        default: true,
    },
};

export const InputSelectProps = {
    ...InputProps,
    multiple: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: 'Please select an option',
    },
    options: {
        type: Array,
        default: [],
    },
};
