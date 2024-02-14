import { prisma } from '../../database/client.js'

export class UpdateDoacaoController {
    async handle(request, response) {
        const { id, pessoa_id, local_id, data } = request.body;

        const doacao = await prisma.doacao.update({
            where: {
                id: parseInt(id)
            },
            data: {
                pessoa: {
                    connect: {
                        id: pessoa_id
                    }
                },
                local: {
                    connect: {
                        id: local_id
                    }
                },
                data
            }
        });

        return response.json(doacao);
    }
}
