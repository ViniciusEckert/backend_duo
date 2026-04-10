import {Request, Response} from "express"
import {prisma} from "../../config/prisma"
import { handleErrors } from "../helpers/handleErros"
import  bcrypt  from "bcrypt"
import jwt from "jsonwebtoken"

export default{
    login: async (request: Request, response: Response) => {
        try{
            const {email, senha} = request.body
            
            const user = await prisma.user.findUnique({
                where: {
                    email,
                },
            })

            if(!user || !bcrypt.compareSync(senha, user.senha)){
                return response.status(404).json("email/senha Inválido(a). ")
            }

            const token = jwt.sign(user, process.env.JWT_SECRET!, {
                expiresIn: "10s"
            })

            return response.status(200).json({ access_token: token });
        } catch(e){
            return handleErrors(e, response)
        }
    },
    list: async (request: Request, response: Response) => {
        try{
            const user = await prisma.user.findMany()
            return response.status(200).json(user)
        } catch (e) {
            return handleErrors(e, response)
        }
    },
    create: async (request: Request, response: Response) => {
    try {
      const { nome, email, senha, admin, user } = request.body;
        
      if (!user || !user.admin) {
        return response.status(403).json("Não autorizado");
      }

      if (!nome || !email || !senha) {
        return response.status(400).json("Dados do funcionário incompletos");
      }

      const users = await prisma.user.create({
        data: {
          nome,
          email,
          senha: bcrypt.hashSync(senha, +process.env.BCRYPT_ROUNDS!),
          admin,
        },
      });
      return response.status(201).json(users);
    } catch (e) {
      return handleErrors(e, response);
    }
  },
    
    getById: async (request: Request, response: Response) => {
        try{
            const {id} = request.params
            const user = await prisma.user.findUnique({where: {id: +id}})
            return response.status(200).json(user)
        } catch (e) {
            return handleErrors(e, response)
        }
    },
    delete: async (request: Request, response: Response) => {
        try {
            const {id} = request.params
            const user = await prisma.user.delete({
                where: {id: +id}
            })
            return response.status(200).json(user)
        } catch (e) {
            return handleErrors(e, response)
        }
    },
    update: async (request: Request, response: Response) => {
        try{
            const {id} = request.params
            const {nome, email, admin} = request.body

            const user = await prisma.user.update({
                data: {
                    nome,
                    email,
                    admin
                },
                where: {id: +id}
            })
            return response.status(201).json(user)
        } catch (e) {
            return handleErrors(e, response)
        }
    }
}