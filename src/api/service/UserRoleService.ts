import { IUserRoleDTO } from "../dto/UserRoleDTO";
import { UserRoleRepository } from "../repository/UserRoleRepository";

export class UserRoleService {
    userRoleRepo: any;
    constructor() {
        this.userRoleRepo = new UserRoleRepository();
    }

    async getAllUserRoles() {
        return await this.userRoleRepo.findAll();
    }
    async createUserRole(userRole: IUserRoleDTO) {
        console.log("userRole =>",userRole)
        return await this.userRoleRepo.create(userRole);
    }
}