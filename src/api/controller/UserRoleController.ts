import express, { Router } from 'express';
import { UserRoleService } from '../service/UserRoleService';
import { IUserRoleDTO } from '../dto/UserRoleDTO';

const userRolesRouter = express.Router();
const userRoleSerivce = new UserRoleService();

userRolesRouter.get('/user-role', async (req, res) => {
    try {
        const allUserRoles = await userRoleSerivce.getAllUserRoles();
        return res.send({
            status: 200,
            userRoles: allUserRoles
        })
    }
    catch (err) {
        console.log(err);
    }
});

userRolesRouter.post('/user-role', async (req, res) => {
    try {
        const userRole:IUserRoleDTO = req.body;
        await userRoleSerivce.createUserRole(userRole);
        return res.send({
            status: 200,
            message: "UserRole is created."
        })
    }
    catch (err) {
        console.log(err);
    }
});

export default userRolesRouter;