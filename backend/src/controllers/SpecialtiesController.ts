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

    async findByDoctor(request: Request, response: Response) {
        const { id } = request.params;

        const specialties = await knex('specialties_doctors')
        .where('doctor_id', id)
        .join('specialties', 'specialties_doctors.specialty_id', 'specialties.id')
        .select('specialties.*');
  
        return response.json(specialties);
    }
}

export default SpecialtiesController;