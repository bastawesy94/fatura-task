import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connection';
import usersRouter from './api/controller/UserController';
const bodyParser = require('body-parser');
const app: Express = express();
app.use(bodyParser.json());
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });
app.use(usersRouter);
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Auth service is running !');
});

app.get('/status', (req: Request, res: Response) => {
    res.send('service is up!');
});

app.listen(port, async () => {
    await connectDB();
});
