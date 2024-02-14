import { prisma } from "../../database/client.js";


export class UpdateEstadoController {
    
    async handle(request, response) {
        
        try {
            const { id, nome, sigla } = request.body

            const estado = await prisma.estado.update({

                where: {
                    id
                },

                data: {
                    nome, 
                    sigla
                }

            })

            return response.json(estado)
        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }

    }

}