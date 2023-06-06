const express = require('express');
const bodyParser = require('body-parser');
import { Request, Response } from "express";
const jwt = require('jsonwebtoken')

export const authenticateJWT = (req:any, res:Response, next: () => void) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err:any, user:any) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};