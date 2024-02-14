import { prisma } from '../../database/client.js'

export class GetAllPessoaController {
    async handle(request, response) {
        try{
            const pessoas = await prisma.pessoa.findMany({
                include: {
                    cidade: true, // Inclui informações da cidade relacionada
                    tipoSanguineo: true // Inclui informações do tipo sanguíneo
                }
            });
            return response.json(pessoas);
        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
