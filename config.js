import dotenv from 'dotenv';
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

export const configs = {
    CRYPTO_KEY: process.env.CRYPTO_KEY
}
