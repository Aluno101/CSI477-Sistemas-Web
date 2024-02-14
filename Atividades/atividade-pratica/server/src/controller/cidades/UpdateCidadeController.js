import { prisma } from '../../database/client.js'

export class UpdateCidadeController {

    async handle(request, response) {

        const { id, nome, estado_id } = request.body;

        try{
            const cidade = await prisma.cidade.update({

                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    estado: {
                        connect: {
                            id: estado_id
                        }
                    }

                }

            });

            return response.json(cidade);

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }

    }

}