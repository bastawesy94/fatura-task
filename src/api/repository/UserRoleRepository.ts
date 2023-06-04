import { Model, ModelCtor } from "sequelize-typescript";
import UserRolesSchema from "../../db/models/schemas/UserRoles.schema";
import { IUserRoleDTO } from "../dto/UserRoleDTO";

export class UserRoleRepository {
    userRoleSchema: any;
    constructor() {
        this.userRoleSchema = UserRolesSchema;
    }

    findAll() {
        return this.userRoleSchema.findAll();
    }
    create(userRole:IUserRoleDTO) {
        return this.userRoleSchema.create(userRole);
    }
}