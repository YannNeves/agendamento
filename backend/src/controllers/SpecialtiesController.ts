import { Request, Response} from 'express';
import knex from '../database/connection';

class SpecialtiesController{

    async index(request: Request, response: Response) {
        const specialties = await knex('specialties')
        .orderBy('id', 'desc');
  
        return response.json(specialties);
    }

    async create(request: Request, response: Response) {
    
        const {
            name,
        } = request.body;
        
        const specialty = {
            name,
        };
  
        const trx = await knex.transaction();

        await trx('specialties').insert(specialty);

        await trx.commit();

        return response.status(200).json('Salvo com sucesso!');
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        await knex("specialties")
          .where("id", id)
          .delete();
    
        return response.status(204).send();
    }
}

export default SpecialtiesController;