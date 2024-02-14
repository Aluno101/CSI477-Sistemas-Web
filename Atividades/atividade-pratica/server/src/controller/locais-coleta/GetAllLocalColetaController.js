import { prisma } from '../../database/client.js'

export class GetAllLocalColetaController {
    async handle(request, response) {
        try{
            const locaisColeta = await prisma.localColeta.findMany({
                include: {
                    cidade: true // Inclui informações da cidade relacionada
                }
            });
            return response.json(locaisColeta);

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
