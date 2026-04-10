import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { User } from "../../generated/prisma/client";

export function authentication(request: Request, response: Response, next: NextFunction){
    const authHeader = request.headers.authorization

    try{
        if(!authHeader){
            return response.status(401).json("Usuário não identificado")
        }

        const token = authHeader.split(" ")[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET!)

        if(!request.body){
            request.body = {}   
        }

        request.body.user = decoded as User

        next();
    }catch(e){
        console.log(e)
        return response.status(401).json("Não autenticado")
    }

}
