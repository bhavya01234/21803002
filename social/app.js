const express = require("express");
const dotenv = require("dotenv");
const dataRoutes = require("./routes/dataRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9876;

app.use("/", dataRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
