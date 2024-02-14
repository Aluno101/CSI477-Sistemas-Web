import { prisma } from '../../database/client.js'

export class CreateDoacaoController {
    async handle(request, response) {
        const { pessoa_id, local_id, data } = request.body;

        const doacao = await prisma.doacao.create({
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
