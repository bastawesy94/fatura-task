import { Encryprion } from "../../utils/Encryprion";
import { IGetUserDTO, IUserDTO } from "../dto/UserDTO";
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
        const encryptedPassword = Encryprion.encrypt(user.password);
        user.password = encryptedPassword;
        return await this.userRepo.create(user);
    }
    async isAuth(user: IGetUserDTO) {
        const retrievedUser = await this.userRepo.findOne(user);
        const decryptedPassword = Encryprion.dencrypt(retrievedUser.password);
        if (decryptedPassword === user.password)
            return { user: retrievedUser, isAuth: true };
        return { isAuth: false };
    }
    async findUserById(userId: number) {
        const retrievedUser = await this.userRepo.findById(userId);
        return retrievedUser;
    }
}