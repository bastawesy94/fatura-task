import { IRoleDTO } from "../dto/RoleDTO";
import { RoleService } from "../service/RoleService";
import express, { Router } from 'express';
const rolesRouter = express.Router();
const roleSerivce = new RoleService();

rolesRouter.get('/roles', async (req, res) => {
    try {
        const allRoles = await roleSerivce.getAllRoles();
        return res.send({
            status: 200,
            roles: allRoles
        })
    }
    catch (err) {
        console.log(err);
    }
});

rolesRouter.post('/roles', async (req, res) => {
    try {
        const role:IRoleDTO = req.body;
        await roleSerivce.createRole(role);
        return res.send({
            status: 200,
            message: "Role is created."
        })
    }
    catch (err) {
        console.log(err);
    }
});

export default rolesRouter;