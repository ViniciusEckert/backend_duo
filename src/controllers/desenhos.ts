import { Request, Response } from "express";

import { prisma } from "../../config/prisma"
import { handleErrors } from "../helpers/handleErros";

export default {
    list: async (request: Request, response: Response) => {
        try{
            const animations = await prisma.desenho.findMany()
            return response.status(200).json(animations)
        } catch (e) {
            return handleErrors(e, response)
        }
    },

    getById: async (request: Request, response: Response) => {
        try{
            const {id} = request.params
            const animation = await prisma.desenho.findUnique({where: {id: +id}})
            return response.status(200).json(animation)
        } catch (e) {
            return handleErrors(e, response)
        }
    },

    create: async (request: Request, response: Response) =>  {
        try {
            const {nome, lançamento, temporadas, status, genero} = request.body
            const animation = await prisma.desenho.create({
                data: {
                    nome,
                    lançamento,
                    temporadas,
                    status,
                    genero
                }
            })
            return response.status(201).json(animation)
        } catch (e) {
            return handleErrors(e, response)
        }
    },

    delete: async (request: Request, response: Response) => {
        try {
            const {id} = request.params
            const animation = await prisma.desenho.delete({
                where: {id: +id}
            })
            return response.status(200).json(animation)
        } catch (e) {
            return handleErrors(e, response)
        }
    },
    
    update: async (request: Request, response: Response) => {
        try{
            const {id} = request.params
            const {nome, lançamento, temporadas, status, genero} = request.body

            const animation = await prisma.desenho.update({
                data: {
                    nome,
                    lançamento,
                    temporadas,
                    status,
                    genero
                },
                where: {id: +id}
            })
            return response.status(201).json(animation)
        } catch (e) {
            return handleErrors(e, response)
        }
    }
}
