import { Router } from 'express';
import { CreateTipoSanguineoController } from '../controller/tipos-sanguineos/CreateTipoSanguineoController.js';
import { GetAllTipoSanguineoController } from '../controller/tipos-sanguineos/GetAllTipoSanguineoController.js';
import { GetByIdTipoSanguineoController } from '../controller/tipos-sanguineos/GetByIdTipoSanguineoController.js';
import { UpdateTipoSanguineoController } from '../controller/tipos-sanguineos/UpdateTipoSanguineoController.js';
import { DeleteTipoSanguineoController } from '../controller/tipos-sanguineos/DeleteTipoSanguineoController.js';

const tipoSanguineoRouter = Router();

// Create
const createTipoSanguineoController = new CreateTipoSanguineoController();
tipoSanguineoRouter.post('/tiposSanguineos', createTipoSanguineoController.handle);

// Get All
const getAllTipoSanguineoController = new GetAllTipoSanguineoController();
tipoSanguineoRouter.get('/tiposSanguineos', getAllTipoSanguineoController.handle);

// Get By Id
const getByIdTipoSanguineoController = new GetByIdTipoSanguineoController();
tipoSanguineoRouter.get('/tiposSanguineos/:id', getByIdTipoSanguineoController.handle);

// Update
const updateTipoSanguineoController = new UpdateTipoSanguineoController();
tipoSanguineoRouter.put('/tiposSanguineos', updateTipoSanguineoController.handle);

// Delete
const deleteTipoSanguineoController = new DeleteTipoSanguineoController();
tipoSanguineoRouter.delete('/tiposSanguineos', deleteTipoSanguineoController.handle);

export { tipoSanguineoRouter };
