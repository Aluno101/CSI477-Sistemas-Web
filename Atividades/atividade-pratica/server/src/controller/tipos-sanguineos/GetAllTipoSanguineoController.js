import { prisma } from '../../database/client.js'

export class GetAllTipoSanguineoController {
    async handle(request, response) {
        try{
            const tiposSanguineos = await prisma.tipoSanguineo.findMany();
            return response.json(tiposSanguineos);
        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
