export function createCustomClassLoop(className, start = 0, end = 100) {
    if (isNaN(start) || isNaN(end)) return [];
    const classes = [];

    for (let i = start; i < end; i++) {
        classes.push(className + i);
    }

    return classes;
}
