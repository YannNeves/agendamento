import { Request, Response} from 'express';
import knex from '../database/connection';

class AppointmentsController{

    async index(request: Request, response: Response) {
        const appointments = await knex('appointments')
        .leftJoin('patients', 'appointments.patient_id', 'patients.id')
        .leftJoin('specialties', 'appointments.specialty_id', 'specialties.id')
        .select('appointments.*', 'patients.name as patient', 'specialties.name as specialty')
        .orderBy('id', 'desc');
  
        return response.json(appointments);
    }

    async create(request: Request, response: Response) {
    
        const {
            scheduling_at,
            patient_id,
            doctor_id,
            specialty_id
        } = request.body;
        
        const speciality_doc = await knex('specialties_doctors')
        .where('doctor_id', doctor_id)
        .where('specialty_id', specialty_id);

        if(speciality_doc.length === 0){
            return response.status(400).json('Doutor escolhido não tem essa especilidade!');
        }

        const patient = {
            scheduling_at,
            patient_id,
            doctor_id,
            specialty_id
        };
  
        const trx = await knex.transaction();

        await trx('appointments').insert(patient);

        await trx.commit();

        return response.status(200).json('Salvo com sucesso!');
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        await knex("appointments")
          .where("id", id)
          .delete();
    
        return response.status(204).send();
    }
}

export default AppointmentsController;