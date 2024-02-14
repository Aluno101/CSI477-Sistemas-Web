import { prisma } from "../../database/client.js";

export class GetByIdCidadeController {

    async handle(request, response) {

        const { id } = request.params;

        try{
            const cidade = await prisma.cidade.findUnique({

                where: {
                    id : parseInt(id)
                },

                include: {
                    estado: true
                }
            });

            return response.json(cidade);

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }

    }

}