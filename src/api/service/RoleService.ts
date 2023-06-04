import { IRoleDTO } from "../dto/RoleDTO";
import { RoleRepository } from "../repository/RoleRepository";

export class RoleService {
    roleRepo: any;
    constructor() {
        this.roleRepo = new RoleRepository();
    }

    async getAllRoles() {
        return await this.roleRepo.findAll();
    }
    async createRole(role: IRoleDTO) {
        return await this.roleRepo.create(role);
    }
}