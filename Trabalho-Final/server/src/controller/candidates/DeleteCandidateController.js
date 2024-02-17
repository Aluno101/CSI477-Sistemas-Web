import { prisma } from '../../database/client.js'

export class DeleteCandidateController {
    async handle(request, response) {
        try {
            const { id } = request.params;

            const candidate = await prisma.candidate.delete({
                where: {
                    id: parseInt(id),
                },
            });

            return response.json({ message: "Candidate successfully deleted.", candidate });

        } catch (error) {
            console.error(error);
            return response.status(400).json({ message: "Error deleting candidate." });
        }
    }
}
