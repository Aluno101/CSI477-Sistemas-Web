import { prisma } from '../../database/client.js'

export class CreateCidadeController {

    async handle(request, response) {

        try{
            const { nome, estado_id } = request.body;

            const cidade = await prisma.cidade.create({

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