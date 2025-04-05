// import { Router } from 'express';
// import { getNumbersAverage } from '../controllers/numberController.js';

// const router = Router();

// router.get('/:numberid', getNumbersAverage);

// export default router;


import express from 'express';
import { getNumbers } from '../controllers/numberController.js';

const router = express.Router();

router.get('/numbers/:numberid', getNumbers);

export default router;
