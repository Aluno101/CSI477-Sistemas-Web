import { prisma } from "../../database/client.js";

export class DeleteEstadoController {

    async handle(request, response) {

        try{
            const { id } = request.body

            const estado = await prisma.estado.delete({
                where: {
                    id
                }
            })

            return response.json(estado)

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }
    }

}