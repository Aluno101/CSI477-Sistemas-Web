import { prisma } from '../../database/client.js';

export class GetAllUsersController {
    async handle(request, response) {
        try {
            const users = await prisma.user.findMany();

            return response.json(users);

        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
