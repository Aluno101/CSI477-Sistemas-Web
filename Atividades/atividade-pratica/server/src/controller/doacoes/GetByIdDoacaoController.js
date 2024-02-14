import { prisma } from "../../database/client.js";

export class GetByIdDoacaoController {
    async handle(request, response) {
        const { id } = request.params;

        const doacao = await prisma.doacao.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                pessoa: true, // Inclui informações da pessoa que fez a doação
                local: true  // Inclui informações do local de coleta onde a doação foi feita
            }
        });

        return response.json(doacao);
    }
}
