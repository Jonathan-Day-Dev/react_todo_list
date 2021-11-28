import express from 'express';
import cors from 'cors';
import Router from './routes/routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(Router);

app.listen(8000, () => {
    console.log('This shit\'s running on port 8000');
});