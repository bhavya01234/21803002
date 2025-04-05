const WINDOW_SIZE = 10;
let numberWindow = [];

export const updateWindow = (newNumbers) => {
    const windowPrevState = [...numberWindow];
    const merged = [...new Set([...numberWindow, ...newNumbers])];
    numberWindow = merged.slice(-WINDOW_SIZE);
    const avg = calculateAverage(numberWindow);
    return { windowPrevState, windowCurrState: numberWindow, avg };
};

const calculateAverage = (numbers) => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return parseFloat((sum / numbers.length).toFixed(2));
};
