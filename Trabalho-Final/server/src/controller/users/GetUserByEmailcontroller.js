import { prisma } from '../../database/client.js';

export class GetUserByEmailController {
    async handle(request, response) {
        try {
            // Extrair o e-mail dos parâmetros da requisição
            const { email } = request.params;

            // Encontrar o usuário pelo e-mail
            const user = await prisma.user.findUnique({
                where: {
                    email: email, // Utilize o e-mail aqui
                },
            });

            if (!user) {
                return response.status(404).json({ message: 'User not found.' });
            }

            return response.json(user);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
