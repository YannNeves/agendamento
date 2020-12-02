import React, { useState, useEffect } from "react";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import { CardContainer } from "./styles";

import {
  HiOutlineDocument,
  HiOutlineDocumentAdd,
} from "react-icons/hi";

import SideBar from "../../components/SideBar";
import Content from "../../components/Content";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Button from "../../components/Button";

interface Appointment {
  id: number;
  scheduling_at: string;
  patient_id: number;
  doctor_id: number;
  specialty_id: number;
  patient: string;
  specialty: string;
}

const Reports: React.FC = () => {
  const history = useHistory();
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const data = async () => {
      await api
        .get("appointments")
        .then((response) => {
          setAppointments(response.data);
        });
    };

    data();
  }, []);

  const handleDelete = async (id: Number) => {
    await api
      .post(`appointments/${id}`);

    setAppointments(appointments.filter((r: Appointment) => r.id != id));
  };

  return (
    <Container>
      <Button
            style={{ border: "none", marginLeft: '50px' }}
            type="button"
            onClick={() => history.push("/create-appointment")}
          >
            <HiOutlineDocumentAdd color="#181818" size={24} />
      </Button>

      <Content>
        <CardContainer>
          <h1>Agendamentos</h1>

          {appointments &&
            appointments.map((a: Appointment) => (
              <Card key={a.id}>
                <h1>{a.patient} ({a.specialty})</h1>
                <br />
                <span>
                  <HiOutlinePencil
                    onClick={() => history.push(`/edit-appointment/${a.id}`)}
                    size={24}
                  />
                  <HiOutlineTrash
                    className="down"
                    size={24}
                    onClick={() => handleDelete(a.id)}
                    style={{ marginLeft: 16 }}
                  />
                </span>
              </Card>
            ))}
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Reports;
