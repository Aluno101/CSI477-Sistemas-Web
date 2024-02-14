import { prisma } from '../../database/client.js'

export class UpdatePessoaController {
    async handle(request, response) {
        const { id, nome, rua, numero, complemento, rg, cidade_id, tipo_id } = request.body;

        try{
            const pessoa = await prisma.pessoa.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
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
