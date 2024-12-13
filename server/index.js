import express from 'express';
import dotenv from 'dotenv'
import publicRoute from './src/routes/public-api.route.js';
import route from './src/routes/api.route.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/public/images', express.static(path.join(__dirname + '/public/images')));

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(cookieParser());

app.use(publicRoute);
app.use(route);

app.get('*', function (req, res) {
    res.status(404).json("404 Page not found");
})

app.listen(PORT, function () {
    console.log(`App runs on http://localhost:${PORT}`);
})