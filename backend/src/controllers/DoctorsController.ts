import { Request, Response} from 'express';
import knex from '../database/connection';

class DoctorsController {

    async index(request: Request, response: Response) {
        const doctors = await knex('doctors')
        .orderBy('id', 'desc');
  
        return response.json(doctors);
    }

    async create(request: Request, response: Response) {
    
        const {
            name,
            specialty,
        } = request.body;
        
        const doctor = {
            name,
            specialty,
        };
  
        const trx = await knex.transaction();

        await trx('doctors').insert(doctor);
    
        await trx.commit();

        return response.status(200).json('Salvo com sucesso!');
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        await knex("doctors")
          .where("id", id)
          .delete();
    
        return response.status(204).send();
      }
}

export default DoctorsController;