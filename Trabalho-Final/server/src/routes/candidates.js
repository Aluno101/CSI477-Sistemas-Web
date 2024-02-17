import { Router } from 'express';
import { CreateCandidateController } from '../controller/candidates/CreateCandidateController.js';
import { GetAllCandidatesController } from '../controller/candidates/GetAllCandidatesController.js';
import { GetCandidateByIdController } from '../controller/candidates/GetCandidateByIdController.js';
import { UpdateCandidateController } from '../controller/candidates/UpdateCandidateController.js';
import { DeleteCandidateController } from '../controller/candidates/DeleteCandidateController.js';

const candidateRouter = Router();

// Create
const createCandidateController = new CreateCandidateController();
candidateRouter.post('/', createCandidateController.handle);

// Get All
const getAllCandidatesController = new GetAllCandidatesController();
candidateRouter.get('/', getAllCandidatesController.handle);

// Get By Id
const getCandidateByIdController = new GetCandidateByIdController();
candidateRouter.get('/:id', getCandidateByIdController.handle);

// Update
const updateCandidateController = new UpdateCandidateController();
candidateRouter.put('/:id', updateCandidateController.handle);

// Delete
const deleteCandidateController = new DeleteCandidateController();
candidateRouter.delete('/:id', deleteCandidateController.handle);

export { candidateRouter };
