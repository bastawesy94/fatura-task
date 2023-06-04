import { configs } from '../../config';
const CryptoJS = require("crypto-js");


export class Encryprion {
    static key = configs.CRYPTO_KEY;

    static encrypt(password: string) {
        return CryptoJS.AES.encrypt(password, Encryprion.key).toString();
    }
    static dencrypt(password: string) {
        return CryptoJS.AES.decrypt(password, Encryprion.key).toString(CryptoJS.enc.Utf8);
    }
}