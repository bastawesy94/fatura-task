import { IUserDTO } from "../dto/UserDTO";
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
        const user:IUserDTO = req.body;
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

export default usersRouter;