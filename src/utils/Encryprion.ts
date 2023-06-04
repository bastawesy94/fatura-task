const CryptoJS = require("crypto-js");
const key = "U2FsdGVkX18iI0gLaeQmf2z7Ev82hMynTo1c2TkCCJo=";

export class Encryprion {
    static encrypt(password: string) {
        return CryptoJS.AES.encrypt(password, key).toString();
    }
    static dencrypt(password: string) {
        return CryptoJS.AES.decrypt(password, key).toString(CryptoJS.enc.Utf8);
    }
} 