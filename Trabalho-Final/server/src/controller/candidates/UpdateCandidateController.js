import { prisma } from '../../database/client.js';

export class UpdateCandidateController {
    async handle(request, response) {
        try {
            const { id } = request.params; // ID do candidato a ser atualizado
            const { name, votes } = request.body; // Novos valores

            const candidate = await prisma.candidate.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    name,
                    votes,
                },
            });

            return response.json(candidate);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
