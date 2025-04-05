// import { fetchNumbers } from '../utils/fetchHelper.js';
// import { updateWindow } from '../models/numberModel.js';

// const VALID_IDS = ['p', 'f', 'e', 'r'];

// export const processNumberRequest = async (id) => {
//     if (!VALID_IDS.includes(id)) {
//         return { error: 'Invalid number ID' };
//     }

//     const newNumbers = await fetchNumbers(id);
//     const { windowPrevState, windowCurrState, avg } = updateWindow(newNumbers);

//     return {
//         windowPrevState,
//         windowCurrState,
//         numbers: newNumbers,
//         avg
//     };
// };


import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

import { updateWindow } from '../utils/windowManager.js';
dotenv.config({
    path: './.env'
})

const WINDOW_SIZE = 10;
let slidingWindow = [];

const API_URLS = {
    p: 'http://20.244.56.144/evaluation-service/primes',
    f: 'http://20.244.56.144/evaluation-service/fibo',
    e: 'http://20.244.56.144/evaluation-service/even',
    r: 'http://20.244.56.144/evaluation-service/rand'
};

export const fetchNumbersService = async (numberId) => {
    const apiUrl = API_URLS[numberId];
    if (!apiUrl) throw new Error('Invalid number ID');

    const windowPrevState = [...slidingWindow];
    let fetchedNumbers = [];

    try {
        console.log('Loaded token:', process.env.TOKEN);

        const response = await axios.get(apiUrl, {
            timeout: 500,
            headers: {
                Authorization: process.env.TOKEN
            }
        });

        fetchedNumbers = response.data.numbers || [];
        slidingWindow = updateWindow(slidingWindow, fetchedNumbers, WINDOW_SIZE);

    } catch (error) {
        console.error('Error fetching numbers:', error.message);
    }

    const avg = slidingWindow.length > 0
        ? parseFloat((slidingWindow.reduce((sum, val) => sum + val, 0) / slidingWindow.length).toFixed(2))
        : 0;

    return {
        windowPrevState,
        windowCurrState: slidingWindow,
        numbers: fetchedNumbers,
        avg
    };
};
// const WINDOW_SIZE = 10;
// let numberWindow = [];

// const idMap = {
//     p: "primes",
//     f: "fibo",
//     e: "even",
//     r: "rand"
// };

// export async function handleNumberFetch(numberid) {
//     const apiType = idMap[numberid];
//     if (!apiType) return { error: "Invalid number ID" };

//     const url = `http://20.244.56.144/evaluation-service/${apiType}`;
//     const prevWindow = [...numberWindow];
//     let numbers = [];

//     try {
//         const response = await axios.get(url, { timeout: 500 });
//         numbers = response.data.numbers || [];
//     } catch (error) {
//         console.warn("Error fetching numbers or timeout");
//     }

//     numberWindow = updateWindow(numberWindow, numbers, WINDOW_SIZE);

//     const avg = numberWindow.length > 0
//         ? parseFloat((numberWindow.reduce((a, b) => a + b, 0) / numberWindow.length).toFixed(2))
//         : 0;

//     return {
//         windowPrevState: prevWindow,
//         windowCurrState: numberWindow,
//         numbers,
//         avg
//     };
// }
