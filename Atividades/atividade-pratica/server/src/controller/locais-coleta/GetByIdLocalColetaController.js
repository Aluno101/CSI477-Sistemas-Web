import { prisma } from "../../database/client.js";

export class GetByIdLocalColetaController {
    async handle(request, response) {
        const { id } = request.params;

        try{
            const localColeta = await prisma.localColeta.findUnique({
                where: {
                    id: parseInt(id)
                },
                include: {
                    cidade: true // Inclui informações da cidade relacionada
                }
            });

            return response.json(localColeta);
        
        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
