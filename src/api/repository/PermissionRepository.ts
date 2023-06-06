import { sequelize } from "../../db/connection";
import PermissionSchema from "../../db/models/schemas/permissions.schema";
import { IPermissionDTO } from "../dto/PermissionDTO";

export class PermissionRepository {
    permissionSchema: any;
    constructor() {
        this.permissionSchema = PermissionSchema;
    }

    findAll() {
        return this.permissionSchema.findAll();
    }
    create(permission:IPermissionDTO) {
        return this.permissionSchema.create(permission);
    }

    findByRoleId(roleId: number) {
        // return this.permissionSchema.findAll({
        //      where: { role_id:roleId }
        // });
        return sequelize.query(`select * from permissions where role_id = ${roleId};`)
    }
}