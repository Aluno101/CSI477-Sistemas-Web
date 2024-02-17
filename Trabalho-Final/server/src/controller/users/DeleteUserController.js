import { prisma } from '../../database/client.js'

export class DeleteUserController {
    async handle(request, response) {
        try {
            const { id } = request.params;

            const user = await prisma.user.delete({
                where: {
                    id: parseInt(id),
                },
            });

            return response.json({ message: "User successfully deleted.", user });

        } catch (error) {
            console.error(error);
            // Alterar a mensagem de erro para algo mais genérico antes de enviar ao cliente pode ser uma boa prática
            return response.status(400).json({ message: "Error deleting user." });
        }
    }
}
