import { prisma } from '../../database/client.js'

export class CreateTipoSanguineoController {
    async handle(request, response) {
        const { tipo, fator } = request.body;

        try{
            const tipoSanguineo = await prisma.tipoSanguineo.create({
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
