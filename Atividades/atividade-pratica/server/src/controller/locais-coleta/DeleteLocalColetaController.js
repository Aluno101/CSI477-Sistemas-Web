import { prisma } from '../../database/client.js'

export class DeleteLocalColetaController {
    async handle(request, response) {
        const { id } = request.body;
        console.log(id)

        try {
            const localColeta = await prisma.localColeta.delete({
                where: {
                    id: parseInt(id),
                },
            });

            return response.json(localColeta);
        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
