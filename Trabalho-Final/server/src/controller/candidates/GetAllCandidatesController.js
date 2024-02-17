import { prisma } from '../../database/client.js';

export class GetAllCandidatesController {
    async handle(request, response) {
        try {
            const candidates = await prisma.candidate.findMany();

            return response.json(candidates);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
