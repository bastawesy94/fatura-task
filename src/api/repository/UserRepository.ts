import { Model, ModelCtor } from "sequelize-typescript";
import UserSchema from "../../db/models/schemas/users.schema";
import { IUserDTO } from "../dto/UserDTO";

export class UserRepository {
    userSchema: any;
    constructor() {
        this.userSchema = UserSchema;
    }

    findAll() {
        return this.userSchema.findAll();
    }
    create(user:IUserDTO) {
        return this.userSchema.create(user);
    }
}