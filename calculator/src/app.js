// import express from 'express';
// import numberRoutes from './routes/numberRoutes.js';

// const app = express();

// app.use(express.json());
// app.use('/numbers', numberRoutes);

// app.use((req, res) => {
//     res.status(404).json({ error: 'Route not found' });
// });

// export default app;
import express from 'express';
import dotenv from 'dotenv';
import numberRoutes from './routes/numberRoutes.js';

dotenv.config({
    path: './.env'
})

const app = express();

// Routes
app.use('/', numberRoutes);

export default app;



// const express = require("express");
// const numberRoutes = require("./routes/numberRoutes");

// const app = express();

// app.use("/", numberRoutes);

// module.exports = app;
