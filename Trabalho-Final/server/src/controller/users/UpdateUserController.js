import { prisma } from '../../database/client.js';

export class UpdateUserController {
    async handle(request, response) {
        try {
            const { id } = request.params; // ID do usuário a ser atualizado
            const { email, voted } = request.body; // Novos valores

            const user = await prisma.user.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    email,
                    voted,
                },
            });

            return response.json(user);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
