import express, { Router } from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);
const users = [
    'Antonio',
    'Maria',
    'Cleito',
    'Daniel',
    'Pedro'
]



app.listen(3333);