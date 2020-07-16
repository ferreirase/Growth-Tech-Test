import { Router } from 'express';
import mainRoutes from './main.routes';

const routes = Router();

routes.use('/users', mainRoutes);

export default routes;
