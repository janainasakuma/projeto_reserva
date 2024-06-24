import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import SessionController from './controllers/SessionController'
import HouseControllers from './controllers/HouseControllers'
import DashboardController from './controllers/DashboardController'
import ReserveController from './controllers/ReserveController'

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store)

routes.post('/house', upload.single('thumbnail'), HouseControllers.store);
routes.get('/house', HouseControllers.index);
routes.put('/houses:houses_id', upload.single('thumbnail'), HouseControllers.update);
routes.delete('/house', HouseControllers.destroy);

routes.get('/dashboard', DashboardController.show);

routes.post('/houses/:house_id/reserve', ReserveController.store);
routes.get('/reserves', ReserveController.index);
routes.delete('/reserve/cancel', ReserveController.destroy);

export default routes