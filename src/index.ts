import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const bodyParser = require('body-parser');
const app: Express = express();
app.use(bodyParser.json());
dotenv.config({path:`./.env.${process.env.NODE_ENV}`});

const port = process.env.PORT;
//Server status endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Auth service is running !');
});

app.get('/status', (req: Request, res: Response) => {
    res.send('service is up!');
  });

//Start express serevr on port numer => 8000
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on ${port}`);
});
