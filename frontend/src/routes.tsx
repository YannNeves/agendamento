import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Appointments from "./pages/Appointments";
import AppointmentsCreate from "./pages/Appointments/Create";


const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Appointments} path="/"  exact />
      <Route component={AppointmentsCreate} path="/create-appointment" />
      <Route component={AppointmentsCreate} path="/edit-appointment/:id" />
    </BrowserRouter>
  )
}


export default Routes;
