import { prisma } from "../../database/client.js";

export class GetByIdTipoSanguineoController {
    async handle(request, response) {
        const { id } = request.params;

        try{
            const tipoSanguineo = await prisma.tipoSanguineo.findUnique({
                where: {
                    id: parseInt(id)
                }
                // Não inclui informações relacionadas pois assumimos que tipo sanguíneo pode não ter relações diretas a incluir aqui
            });

            return response.json(tipoSanguineo);
        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
