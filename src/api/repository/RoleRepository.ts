import RoleSchema from "../../db/models/schemas/roles.schema";
import { IRoleDTO } from "../dto/RoleDTO";

export class RoleRepository {
    roleSchema: any;
    constructor() {
        this.roleSchema = RoleSchema;
    }

    findAll() {
        return this.roleSchema.findAll();
    }
    create(role:IRoleDTO) {
        return this.roleSchema.create(role);
    }
}