import express from 'express';


import SpecialtiesController from './controllers/SpecialtiesController';
import DoctorsController from './controllers/DoctorsController';
import PatientsController from './controllers/PatientsController';
import AppointmentsController from './controllers/AppointmentsController';

const routes = express.Router();
const specialtiesController = new SpecialtiesController();
const doctorsController = new DoctorsController();
const patientsController = new PatientsController();
const appointmentsController = new AppointmentsController();


routes.get('/specialties', specialtiesController.index);
routes.post('/specialties', specialtiesController.create);
routes.post('/specialties/:id', specialtiesController.delete);

routes.get('/doctors', doctorsController.index);
routes.post('/doctors', doctorsController.create);
routes.post('/doctors/:id', doctorsController.delete);

routes.get('/patients', patientsController.index);
routes.post('/patients', patientsController.create);
routes.post('/patients/:id', patientsController.delete);


routes.get('/appointments', appointmentsController.index);
routes.post('/appointments', appointmentsController.create);
routes.post('/appointments/:id', appointmentsController.delete);


export default routes;