import { Router } from 'express';
import { VoteController } from '../controller/vote/VoteController.js';


const voteRouter = Router();

// Vote
const voteController = new VoteController();
voteRouter.post('/', voteController.handle);

export { voteRouter };
