import { prisma } from '../../database/client.js'

export class CreateCandidateController {
    async handle(request, response) {
        try {
            const { name } = request.body;

            const candidate = await prisma.candidate.create({
                data: {
                    name,
                },
            });

            return response.json(candidate);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
