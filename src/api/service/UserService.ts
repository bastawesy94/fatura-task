import { Encryprion } from "../../utils/Encryprion";
import { IUserDTO } from "../dto/UserDTO";
import { UserRepository } from "../repository/UserRepository";

export class UserService {
    userRepo: any;
    constructor() {
        this.userRepo = new UserRepository();
    }

    async getAllUsers() {
        return await this.userRepo.findAll();
    }
    async createUser(user: IUserDTO) {
        const encryprion = new Encryprion();
        const encryptedPassword = Encryprion.encrypt(user.password);
        user.password = encryptedPassword;
        return await this.userRepo.create(user);
    }
}