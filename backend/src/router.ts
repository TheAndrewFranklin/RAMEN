import express, { IRouter } from 'express';
import userRoute from './user/routes';

const router = express.Router();

const routes = (): IRouter => {
	router.get('/', (req, res) => {
		res.json('Welcome');
	});
	router.use('/users', new userRoute().getRoutes());

	return router;
};

export default routes;
