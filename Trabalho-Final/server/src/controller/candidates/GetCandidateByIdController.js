import { prisma } from '../../database/client.js';

export class GetCandidateByIdController {
    async handle(request, response) {
        try {
            const { id } = request.params; // Assumindo que o ID vem dos parâmetros da URL

            const candidate = await prisma.candidate.findUnique({
                where: {
                    id: parseInt(id),
                },
            });

            if (!candidate) {
                return response.status(404).json({ message: 'Candidate not found.' });
            }

            return response.json(candidate);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
