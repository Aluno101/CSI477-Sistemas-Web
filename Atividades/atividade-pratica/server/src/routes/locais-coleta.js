import { Router } from 'express';
import { CreateLocalColetaController } from '../controller/locais-coleta/CreateLocalColetaController.js';
import { GetAllLocalColetaController } from '../controller/locais-coleta/GetAllLocalColetaController.js';
import { GetByIdLocalColetaController } from '../controller/locais-coleta/GetByIdLocalColetaController.js';
import { UpdateLocalColetaController } from '../controller/locais-coleta/UpdateLocalColetaController.js';
import { DeleteLocalColetaController } from '../controller/locais-coleta/DeleteLocalColetaController.js';

const localColetaRouter = Router();

// Create
const createLocalColetaController = new CreateLocalColetaController();
localColetaRouter.post('/localColeta', createLocalColetaController.handle);

// Get All
const getAllLocalColetaController = new GetAllLocalColetaController();
localColetaRouter.get('/localColeta', getAllLocalColetaController.handle);

// Get By Id
const getByIdLocalColetaController = new GetByIdLocalColetaController();
localColetaRouter.get('/localColeta/:id', getByIdLocalColetaController.handle);

// Update
const updateLocalColetaController = new UpdateLocalColetaController();
localColetaRouter.put('/localColeta', updateLocalColetaController.handle);

// Delete
const deleteLocalColetaController = new DeleteLocalColetaController();
localColetaRouter.delete('/localColeta', deleteLocalColetaController.handle);

export { localColetaRouter };
