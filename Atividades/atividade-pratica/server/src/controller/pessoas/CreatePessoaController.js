import { prisma } from '../../database/client.js'

export class CreatePessoaController {
    async handle(request, response) {
        const { nome, rua, numero, complemento, rg, cidade_id, tipo_id } = request.body;

        try{
            const pessoa = await prisma.pessoa.create({
                data: {
                    nome,
                    rua,
                    numero,
                    complemento, // Assumindo que pode ser opcional
                    rg,
                    cidade: {
                        connect: {
                            id: cidade_id
                        }
                    },
                    tipoSanguineo: {
                        connect: {
                            id: tipo_id
                        }
                    }
                }
            });

            return response.json(pessoa);

        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
