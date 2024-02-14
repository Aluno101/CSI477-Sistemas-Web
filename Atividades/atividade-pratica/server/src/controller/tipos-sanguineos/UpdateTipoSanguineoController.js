import { prisma } from '../../database/client.js'

export class UpdateTipoSanguineoController {
    async handle(request, response) {
        const { id, tipo, fator } = request.body;

        try{
            const tipoSanguineo = await prisma.tipoSanguineo.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    tipo,
                    fator
                }
            });

            return response.json(tipoSanguineo);
        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
