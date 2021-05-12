import express, { IRouter } from 'express';
import userController from '../controller';
import userValidator from '../validator';
import { userAuth } from '../../middleware/auth.middleware';

class UserRoutes {
	private UserController = new userController();
	private router = express.Router();
	private UserValidator = new userValidator();

	constructor() {
		this.routes();
	}

	private routes = () => {
		this.router.get('', this.UserController.getAllUsers);

		this.router.post('', this.UserValidator.newUser, this.UserController.newUser);

		this.router.get('/:_id', userAuth, this.UserController.getUser);

		this.router.put('/:_id', this.UserController.updateUser);

		this.router.delete('/:_id', this.UserController.deleteUser);
	};

	public getRoutes = (): IRouter => {
		return this.router;
	};
}

export default UserRoutes;
