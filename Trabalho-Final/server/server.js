import express from 'express';
import cors from 'cors';

import { candidateRouter } from './src/routes/candidates.js';
import { userRouter } from './src/routes/users.js'; 
import { voteRouter } from './src/routes/vote.js'; 

const server = express();
const PORT = 5000;

server.use(express.json());
server.use(cors());

// Defina a rota base para a API e uma mensagem de status
server.get('/', (request, response) => {
    response.json({
        message: 'Status: Server is running.'
    });
});

// Use os routers com prefixos para organizar melhor as rotas
server.use('/candidates', candidateRouter);
server.use('/users', userRouter); 
server.use('/vote', voteRouter); 

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`);
});
