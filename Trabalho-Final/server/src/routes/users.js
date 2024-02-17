import { Router } from 'express';
import { CreateUserController } from '../controller/users/CreateUserController.js';
import { GetAllUsersController } from '../controller/users/GetAllUsersController.js';
import { GetUserByEmailController } from '../controller/users/GetUserByEmailcontroller.js';
import { UpdateUserController } from '../controller/users/UpdateUserController.js';
import { DeleteUserController } from '../controller/users/DeleteUserController.js';

const userRouter = Router();

// Create
const createUserController = new CreateUserController();
userRouter.post('/', createUserController.handle);

// Get All
const getAllUsersController = new GetAllUsersController();
userRouter.get('/', getAllUsersController.handle);

// Get By Id
const getUserByEmailController = new GetUserByEmailController();
userRouter.get('/:email', getUserByEmailController.handle);

// Update
const updateUserController = new UpdateUserController();
userRouter.put('/:id', updateUserController.handle);

// Delete
const deleteUserController = new DeleteUserController();
userRouter.delete('/:id', deleteUserController.handle);

export { userRouter };
