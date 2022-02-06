import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import uuid from "react-uuid"; // key={uuid()}
import "./styles.css";

// COMPONENTS
import NavBar from "./Components/NavBar";
import AddAppointment from "./Components/AddAppointment";
import AppointmentsList from "./Components/AppointmentsList";
import AppointmentDetails from "./Components/AppointmentDetails";
import DoctorsList from "./Components/DoctorsList";
import DoctorDetails from "./Components/DoctorDetails";

// PAGES
import Home from "./Pages/Home";

export default function App() {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const handleAddAppt = (appointment) => {
    setAppointments([...appointments, { id: uuid(), ...appointment }]);
  };

  const handleDeleteAppt = (id) => {
    const newAppointmentsList = appointments.filter((appointment) => {
      return appointment.id !== id;
    });

    setAppointments(newAppointmentsList);
  };

  useEffect(() => {
    const getAppts = JSON.parse(localStorage.getItem("appointments"));
    if (getAppts) setAppointments(getAppts);
  }, []);
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  return (
    // <div className="ui container">
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/doctors" element={<DoctorsList doctors={doctors} />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />

          <Route
            path="/appointments"
            element={
              <AppointmentsList
                appointments={appointments}
                getApptID={handleDeleteAppt}
              />
            }
          />
          <Route
            path="/add"
            element={<AddAppointment handleAddAppt={handleAddAppt} />}
          />
          <Route path="/appointment/:id" element={<AppointmentDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

// const appointments = [
//   {
//     id: "111",
//     patient: "Suzy Q",
//     email: "suzy@gmail.com",
//     phone: "123-456-7890",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODg2jEqoSFCjxwNkQ-APX6iB0Wd5M7bTNDA&usqp=CAU"
//   },
//   {
//     id: "222",
//     patient: "Bobby Blue",
//     email: "bobbyy@yahoo.com",
//     phone: "456-789-0123",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxCJcDGFsfA3i8QBQ82IWfeC3PR5JJh5GAMg&usqp=CAU"
//   }
// ];
