import { prisma } from '../../database/client.js'

export class VoteController {
    async handle(request, response) {
        try {
            const { userId, candidateId } = request.body;

            const user = await prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

            if (!user) {
                return response.status(404).json({ message: "User not found." });
            }

            if (user.voted) {
                return response.status(400).json({ message: "User has already voted." });
            }

            const candidate = await prisma.candidate.update({
                where: {
                    id: candidateId,
                },
                data: {
                    votes: {
                        increment: 1,
                    },
                },
            });

            await prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    voted: true,
                },
            });

            return response.json({ message: "Vote successfully registered.", candidate });

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
