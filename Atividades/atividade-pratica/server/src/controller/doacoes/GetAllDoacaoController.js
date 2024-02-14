import { prisma } from '../../database/client.js'

export class GetAllDoacaoController {
    async handle(request, response) {
        const doacoes = await prisma.doacao.findMany({
            include: {
                pessoa: true, // Inclui informações da pessoa que fez a doação
                local: true  // Inclui informações do local de coleta onde a doação foi feita
            }
        });
        return response.json(doacoes);
    }
}
