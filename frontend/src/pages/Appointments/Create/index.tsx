import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import api from "../../../services/api";

import { HiArrowLeft, HiOutlineCheck } from "react-icons/hi";
import { CardContainer, CardBottom } from "./styles";

import Button from "../../../components/Button";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Input from "../../../components/Input";

interface Patient {
  id: number;
  name: string;
}

interface Doctor {
  id: number;
  name: string;
  specialties: [
    name: string
  ];
}

interface Specialty {
  id: number;
  name: string;
}

const Create: React.FC = () => {
  const { id }: { id: string } = useParams();

  const [patients, setPatients] = useState<Patient[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [specialties, setSpecialties] = useState<Specialty[]>([]);

  const [selectedPatient, setSelectedPatient] = useState('0');
  const [selectedDoctor, setSelectedDoctor] = useState('0');
  const [selectedSpecialty, setSelectedSpecialty] = useState('0');
  const [scheduleDate, setScheduleDate] = useState<string>("");
  const [scheduleHour, setScheduleHour] = useState<string>("");

  const history = useHistory();

  useEffect(() => {
    api.get('patients').then(response => {
      setPatients(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('doctors').then(response => {
      setDoctors(response.data);
    });
  }, []);

  useEffect(() => {
    const data = async () => {
      return await api
        .get("?")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };

    if (id) data();
  }, [id]);

  function handleSelectPatient(event: ChangeEvent<HTMLSelectElement>){
    const patient = event.target.value;
    setSelectedPatient(patient);
  }

  function handleSelectDoctor(event: ChangeEvent<HTMLSelectElement>){
    const doctor = event.target.value;

    api.get(`specialties/${doctor}`).then(response => {
      setSpecialties(response.data);
    });
    
    setSelectedDoctor(doctor);
  }

  function handleSelectSpecialty(event: ChangeEvent<HTMLSelectElement>){
    const specialty = event.target.value;
    setSelectedSpecialty(specialty);
  }

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    

    const scheduling_at = scheduleDate + ' ' + scheduleHour;


    const data = {
      scheduling_at: scheduling_at,
      patient_id: selectedPatient,
      doctor_id: selectedDoctor,
      specialty_id: selectedSpecialty
    };

    try {
      await api.post('appointments', data)

      history.push('/');
    } catch (err) {
      alert('Erro ao cadastrar consulta, tente novamente.');
    }
  }
  
  return (
    <Container>
      <Content>
        <CardContainer>
          <Link to="/">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Voltar
          </Link>
          <form onSubmit={handleSubmit}>
            <h1>{id ? "Editando um agendamento" : "Agendando uma consulta"}</h1>
            <Card style={{ padding: 32 }}>
              <label htmlFor="scheduleDate">Data da Consulta</label>
              <Input
                type="date"
                id="scheduleDate"
                name="scheduleDate"
                placeholder="__-__-____"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
              />
              <br />
              <label htmlFor="scheduleHour">Hora da Consulta</label>
              <Input
                type="time"
                id="scheduleHour"
                name="scheduleHour"
                placeholder="00:00"
                value={scheduleHour}
                onChange={(e) => setScheduleHour(e.target.value)}
              />
              <br />
              <label htmlFor="patient">Paciente</label>
              <select 
                  name="patient"
                  id="patient" 
                  value={selectedPatient} 
                  onChange={handleSelectPatient}
                  >
                  <option value="0">Selecione um Paciente</option>
                  {patients.map(patient => (
                    <option key={patient.id} value={patient.id}>{patient.name}</option>
                  ))}
              </select>
              <br />
              <label htmlFor="doctor">Médico</label>
              <select 
                  name="doctor"
                  id="doctor" 
                  value={selectedDoctor} 
                  onChange={handleSelectDoctor}
                  >
                  <option value="0">Selecione um Médico</option>
                  {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                  ))}
              </select>
              <br />
              <label htmlFor="speciality">Especialidade</label>
              <select 
                  name="doctor"
                  id="doctor" 
                  value={selectedSpecialty} 
                  onChange={handleSelectSpecialty}
                  >
                  <option value="0">Selecione uma Especialidade</option>
                  {specialties.map(specialty => (
                    <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
                  ))}
              </select>
              <CardBottom>
                <Button type="submit">
                  <HiOutlineCheck size={56} />
                  {id ? "Editar" : "Criar"}
                </Button>
              </CardBottom>
            </Card>
          </form>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Create;
