const axios = require("axios");
require("dotenv").config();

const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
});

module.exports = axiosInstance;
