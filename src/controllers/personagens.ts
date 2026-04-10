import {Request, Response} from "express"
import {prisma} from "../../config/prisma"
import { handleErrors } from "../helpers/handleErros"

export default{
    list: async(request: Request, response: Response) => {
        try{
            const char = await prisma.personagens.findMany({
                include:{
                    desenho:true
                }
            })
            return response.status(200).json(char)
        }catch(e){
            return handleErrors(e, response)
        }
    },
    
    getById: async(request: Request, response: Response) => {
        try{
            const {id} = request.params

            const char = await prisma.personagens.findUnique({
                where:{
                    id: +id
                }
            })
            return response.status(200).json(char)
        }catch(e){
            return handleErrors(e, response)
        }
    },

    create: async (request: Request, response: Response) => {
        try{
            const {nome, primeiraAp, idade} = request.body
            const char = await prisma.personagens.create({
                data:{
                    nome,
                    primeiraAp,
                    idade
                }
            })
            return response.status(201).json(char)
        }catch(e){
            return handleErrors(e, response)
        }
    },
    
    update: async(request: Request, response: Response) => {
        try{
            const {id} = request.params
            const {nome, primeiraAp, idade} = request.body

            const char = await prisma.personagens.update({
                data:{
                    nome,
                    primeiraAp,
                    idade
                }, 
                where:{
                    id: +id
                }
            })
            return response.status(201).json(char)

        }catch(e){
            return handleErrors(e, response)
        }
    },

    delete: async(request: Request, response: Response) => {
        try{
            const {id} = request.params

            const char = await prisma.personagens.delete({
                where:{
                    id: +id
                }
            })
            return response.status(200).json(char)

        }catch(e){
            return handleErrors(e, response)
        }
    },

    conectar: async(request: Request, response: Response) => {
        try{
            const {id} = request.params
            const {desenhoId} = request.body
            const char = await prisma.personagens.update({
                where:{
                    id: +id
                },
                data:{
                    desenho:{
                        connect: desenhoId.map((desenhoId:Number) => ({id: desenhoId}))
                    }
                }
            })
            return response.status(201).json(char)

        }catch(e){
            return handleErrors(e, response)
        }
    },
    desconectar: async(request: Request, response: Response) => {
        try{
            const {id} = request.params
            const char = await prisma.personagens.update({
                where:{
                    id: +id
                },
                data:{
                    desenho:{
                        disconnect:{id: +id}
                    }
                }
            })
            return response.status(201).json(char)

        }catch(e){
            return handleErrors(e, response)
        }
    }
}