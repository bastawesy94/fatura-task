import { IGetUserDTO, IUserDTO } from "../dto/UserDTO";
import { UserService } from "../service/UserService";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import express, { Router } from 'express';
import { authenticateJWT } from "../../utils/AuthMiddleware";
import { PermissionService } from "../service/PermissionService";
const usersRouter = express.Router();
const userSerivce = new UserService();
const permissionService = new PermissionService();
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

usersRouter.post('/login', async (req: any, res: Response) => {
    try {
        // check if the username and password are valid
        const user: IGetUserDTO = req.body;
        const authResult = await userSerivce.isAuth(user);
        if (authResult.isAuth) {
            const payload = authResult.user; // Replace with your own payload data
            const secret = process.env.JWT_SECRET!; // Replace with your own secret key
            const options = { expiresIn: process.env.JWT_EXPIRATION_TIME }; // Replace with your own token expiration time
            const token = jwt.sign(payload, secret, options);

            // set the user session
            req.session.user = { id: authResult.user.id };
            res.send({
                status: 200,
                message: "User is Authenticated!",
                token
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

usersRouter.post('/authorize/:permission', authenticateJWT, async (req: any, res: Response) => {
    try{
        const permissionName = req.params.permission;
        const userDetails = await userSerivce.isAutorized(req.user);
        console.log("userDetails ==> ",userDetails)
        const permissions= await permissionService.findByRoleId(userDetails.role_id);
        console.log("incomming param permissionName => ",permissionName);
        for(let permissionIndex in permissions){
            console.log("permission obj => ",permissions[permissionIndex]);
            if(permissionName == permissions[permissionIndex].permission_name){
                return res.send({
                    status: 200,
                    message: "Autorized",
                });
            }
        }
        return res.send({
            status: 401,
            message: "not Autorized",
        });
    }catch(err){
        console.log("ERR= >",err);
    }
});

// create a route to destroy a specific user session

//TODO controllers move to another folder
usersRouter.post('/logout/:userId', (req: any, res) => {
    //@TODO get jwt from header and destroy the session 
    console.log("req.session -> ", req.session);
    const userId = parseInt(req.params.userId);
    if (req.session.user && req.session.user.id === userId) {
        // destroy the user session
        req.session.destroy();
        res.send('Session destroyed');
    } else {
        res.status(401).send('Unauthorized');
    }
});

//autorized endpoint

export default usersRouter;