// import axios from 'axios';

// const apiMap = {
//     p: "http://20.244.56.144/evaluation-service/primes",
//     f: "http://20.244.56.144/evaluation-service/fibo",
//     e: "http://20.244.56.144/evaluation-service/even",
//     r: "http://20.244.56.144/evaluation-service/rand"
// };

// export const fetchNumbers = async (id) => {
//     const url = apiMap[id];
//     if (!url) return [];

//     const controller = new AbortController();
//     const timeout = setTimeout(() => controller.abort(), 500);

//     try {
//         const response = await axios.get(url, { signal: controller.signal });
//         clearTimeout(timeout);
//         return response.data.numbers || [];
//     } catch (err) {
//         return [];
//     }
// };
import axios from 'axios';

const apiMap = {
    p: "http://20.244.56.144/evaluation-service/primes",
    f: "http://20.244.56.144/evaluation-service/fibo",
    e: "http://20.244.56.144/evaluation-service/even",
    r: "http://20.244.56.144/evaluation-service/rand"
};

export const fetchNumbers = async (id) => {
    const url = apiMap[id];
    if (!url) return [];

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 500);

    try {
        const response = await axios.get(url, {
            signal: controller.signal
        });
        clearTimeout(timeout);
        return response.data.numbers || [];
    } catch (err) {
        console.warn("Error fetching numbers or timeout");
        return [];
    }
};
