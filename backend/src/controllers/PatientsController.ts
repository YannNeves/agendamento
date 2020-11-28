import { Request, Response} from 'express';
import knex from '../database/connection';

class PatientsController {

    async index(request: Request, response: Response) {
        const patients = await knex('patients')
        .orderBy('id', 'desc');
  
        return response.json(patients);
    }

    async create(request: Request, response: Response) {
    
        const {
            name,
        } = request.body;
        
        const patient = {
            name
        };
  
        const trx = await knex.transaction();

        await trx('patients').insert(patient);

        await trx.commit();

        return response.status(200).json('Salvo com sucesso!');
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        await knex("patients")
          .where("id", id)
          .delete();
    
        return response.status(204).send();
    }
}

export default PatientsController;