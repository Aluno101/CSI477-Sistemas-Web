import { prisma } from "../../database/client.js";

export class GetByIdPessoaController {
    async handle(request, response) {
        const { id } = request.params;

        try{
            const pessoa = await prisma.pessoa.findUnique({
                where: {
                    id: parseInt(id)
                },
                include: {
                    cidade: true, // Inclui informações da cidade relacionada
                    tipoSanguineo: true // Inclui informações do tipo sanguíneo
                }
            });

            return response.json(pessoa);
        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
