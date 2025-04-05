import app from './app.js';
import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
})
const PORT = process.env.PORT || 9876;

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
