import { prisma } from '../../database/client.js'

export class UpdateLocalColetaController {
    async handle(request, response) {
        const { id, nome, rua, numero, complemento, cidade_id } = request.body;

        try{
            const localColeta = await prisma.localColeta.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    cidade: {
                        connect: {
                            id: cidade_id
                        }
                    }
                }
            });

            return response.json(localColeta);

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
