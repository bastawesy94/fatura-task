import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connection';
import usersRouter from './api/controller/UserController';
import rolesRouter from './api/controller/RoleController';
import permissionsRouter from './api/controller/PermissionController';
import userRolesRouter from './api/controller/UserRoleController';
const { exec } = require('child_process');
import { promisify } from 'util';
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });
const session = require('express-session');
const port = process.env.PORT;
const bodyParser = require('body-parser');
const app: Express = express();

// configure session middleware
const sessionMiddleware = session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true
});

// use session middleware
app.use(sessionMiddleware);
app.use(bodyParser.json());
app.use(usersRouter);
app.use(rolesRouter);
app.use(permissionsRouter);
app.use(userRolesRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Auth service is running !');
});

app.get('/status', (req: Request, res: Response) => {
    res.send('service is up!');
});

app.listen(port, async () => {
    const promisedExcec = promisify(exec);
    await connectDB();
    await promisedExcec('npm run create');
    await promisedExcec('npm run migrate');
    console.log(`Listining on ==> ${port}`);
});
