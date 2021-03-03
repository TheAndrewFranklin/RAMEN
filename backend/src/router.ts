import express, { IRouter } from 'express';
const router = express.Router();

import userRoute from './user/routes';

const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', new userRoute().getRoutes());

  return router;
};

export default routes;
