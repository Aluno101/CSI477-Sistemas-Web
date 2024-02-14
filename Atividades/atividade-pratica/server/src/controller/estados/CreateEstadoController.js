import { prisma } from '../../database/client.js'

export class CreateEstadoController {

    async handle(request, response) {

        console.log(request.body)

        // request.body -> JSON
        const { nome, sigla } = request.body;

        // Validações: model, DTO, Parser, ...
        if (nome === "") {
            return response.status(400).json({
                message: 'Invalid data. Nome and sigla are required.'
            })
        }

        // Sanitização 
        // ...
        try{
            // Persistência dos dados -> Model
            const estado = await prisma.estado.create({
                data: {
                    nome,
                    sigla
                }
            })

            return response.json(estado);

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);

        }
    }
}