import { Model, ModelCtor } from "sequelize-typescript";
import UserSchema from "../../db/models/schemas/users.schema";
import { IGetUserDTO, IUserDTO } from "../dto/UserDTO";
import { UserRoleRepository } from "./UserRoleRepository";
import { sequelize } from "../../db/connection";

export class UserRepository {
    userSchema: any;
    constructor() {
        this.userSchema = UserSchema;
    }

    findAll() {
        return this.userSchema.findAll();
    }
    create(user: IUserDTO) {
        return this.userSchema.create(user);
    }
    findOne(user: IGetUserDTO) {
        console.log("passed one ==> ", user);
        return this.userSchema.findOne({ where: { user_name: user.user_name } });
    }
    findById(id: number) {
        return this.userSchema.findOne({
            // include: [UserRoleRepository],
             where: { id }
        });
    }

    getUserDetails(id:number){
        return sequelize.query(`SELECT * FROM users INNER JOIN users_roles ON users_roles.id=${id} INNER JOIN roles ON roles.id=users_roles.id INNER JOIN permissions ON permissions.id=roles.id ;`);
    }

}