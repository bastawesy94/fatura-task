import { Model, ModelCtor } from "sequelize-typescript";
import UserSchema from "../../db/models/schemas/users.schema";
import { IGetUserDTO, IUserDTO } from "../dto/UserDTO";

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
    findOne(user:IGetUserDTO){
        console.log("passed one ==> ",user);
        return this.userSchema.findOne({ where: { user_name: user.user_name } }); 
    }
    findById(id:number){
        return this.userSchema.findOne({ where: { id } }); 
    }

}