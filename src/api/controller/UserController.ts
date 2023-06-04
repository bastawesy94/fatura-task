import { IGetUserDTO, IUserDTO } from "../dto/UserDTO";
import { UserService } from "../service/UserService";
import express, { Router } from 'express';
const usersRouter = express.Router();
const userSerivce = new UserService();

usersRouter.get('/users', async (req, res) => {
    try {
        const allUsers = await userSerivce.getAllUsers();
        return res.send({
            status: 200,
            users: allUsers
        })
    }
    catch (err) {
        console.log(err);
    }
});

usersRouter.post('/users', async (req, res) => {
    try {
        const user: IUserDTO = req.body;
        await userSerivce.createUser(user);
        return res.send({
            status: 200,
            message: "User is created."
        })
    }
    catch (err) {
        console.log(err);
    }
});

usersRouter.post('/login', async (req: any, res) => {
    try {
        // check if the username and password are valid
        const user: IGetUserDTO = req.body;
        const authResult = await userSerivce.isAuth(user);
        if (authResult.isAuth) {
            // set the user session
            req.session.user = { id: authResult.user.id };
            res.send({
                status: 200,
                message: "User is Authenticated!"
            });
        } else {
            res.send({
                status: 404,
                message: "User is not found!"
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});

// create a route to destroy a specific user session
usersRouter.post('/logout/:userId', (req:any, res) => {
    console.log("req.session -> ",req.session);
    const userId = parseInt(req.params.userId);
    if (req.session.user && req.session.user.id === userId) {
        // destroy the user session
        req.session.destroy();
        res.send('Session destroyed');
    } else {
        res.status(401).send('Unauthorized');
    }
});

export default usersRouter;