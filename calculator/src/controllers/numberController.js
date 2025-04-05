// import { processNumberRequest } from '../services/numberService.js';

// export const getNumbersAverage = async (req, res) => {
//     const { numberid } = req.params;
//     const response = await processNumberRequest(numberid);

//     if (response.error) {
//         return res.status(400).json({ error: response.error });
//     }

//     res.json(response);
// };

import { fetchNumbersService } from '../services/numberService.js';

export const getNumbers = async (req, res) => {
    const { numberid } = req.params;

    try {
        const result = await fetchNumbersService(numberid);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// import { handleNumberFetch } from '../services/numberService.js';

// export async function getNumbers(req, res) {
//     const { numberid } = req.params;
//     const result = await handleNumberFetch(numberid);

//     if (result.error) {
//         return res.status(400).json({ error: result.error });
//     }

//     res.json(result);
// }
