import { IPermissionDTO } from "../dto/PermissionDTO";
import { PermissionService } from "../service/PermissionService";
import express, { Router } from 'express';
const permissionsRouter = express.Router();
const permissionSerivce = new PermissionService();

permissionsRouter.get('/permissions', async (req, res) => {
    try {
        const allPermissions = await permissionSerivce.getAllPermissions();
        return res.send({
            status: 200,
            permissions: allPermissions
        })
    }
    catch (err) {
        console.log(err);
    }
});

permissionsRouter.post('/permissions', async (req, res) => {
    try {
        const permission:IPermissionDTO = req.body;
        await permissionSerivce.createPermission(permission);
        return res.send({
            status: 200,
            message: "Permission is created."
        })
    }
    catch (err) {
        console.log(err);
    }
});

export default permissionsRouter;