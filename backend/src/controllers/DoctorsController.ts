import { Request, Response} from 'express';
import knex from '../database/connection';

class DoctorsController {

    async index(request: Request, response: Response) {

        const doctors = await knex('doctors').orderBy('id', 'desc');

        const serializedDoctors = doctors.map( async doctor => {

            const specialties = await knex('specialties_doctors')
            .where('doctor_id', doctor.id)
            .join('specialties', 'specialties_doctors.specialty_id', 'specialties.id')
            .select('specialties.name');

            return {
                id: doctor.id,
                name: doctor.name,
                specialties: specialties
            }

        });

        return Promise.all(serializedDoctors).then((completed)  => response.json(completed));     
    }

    async create(request: Request, response: Response) {
    
        const {
            name,
            specialty,
        } = request.body;
        
        const doctor = {
            name,
        };
  
        const trx = await knex.transaction();
        const insertedIds =  await trx('doctors').insert(doctor);
        const doctor_id = insertedIds[0];

        const specialtyItems = specialty
        .map((specialty_id: number) => {
            return {
                specialty_id,
                doctor_id: doctor_id,
            };
        })

        await trx('specialties_doctors').insert(specialtyItems);
    
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