import { prisma } from '../../database/client.js'

export class CreateUserController {
    async handle(request, response) {
        try {
            const { email } = request.body;

            // Verificar se o e-mail já existe
            const existingUser = await prisma.user.findUnique({
                where: {
                    email,
                },
            });

            if (existingUser) {
                return response.status(400).json({ message: "User already exists." });
            }

            const user = await prisma.user.create({
                data: {
                    email,
                },
            });

            return response.json(user);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
