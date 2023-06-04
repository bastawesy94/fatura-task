import { IPermissionDTO } from "../dto/PermissionDTO";
import { PermissionRepository } from "../repository/PermissionRepository";

export class PermissionService {
    permissionRepo: any;
    constructor() {
        this.permissionRepo = new PermissionRepository();
    }

    async getAllPermissions() {
        return await this.permissionRepo.findAll();
    }
    async createPermission(permission: IPermissionDTO) {
        return await this.permissionRepo.create(permission);
    }
}