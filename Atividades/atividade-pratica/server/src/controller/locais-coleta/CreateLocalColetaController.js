import { prisma } from '../../database/client.js'

export class CreateLocalColetaController {
    async handle(request, response) {
        const { nome, rua, numero, complemento, cidade_id } = request.body;

        try{
            const localColeta = await prisma.localColeta.create({
                data: {
                    nome,
                    rua,
                    numero,
                    complemento, // Assumindo que pode ser opcional
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
