import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

// COMPONENTS
// import DoctorsList from "./Components/DoctorsList";
import NavBar from "./Components/NavBar";
import AddAppointment from "./Components/AddAppointment";
import AppointmentsList from "./Components/AppointmentsList";

export default function App() {
  // const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const handleAddAppt = (appointment) => {
    console.log(appointment);
    setAppointments([...appointments, appointment]);
  };
  // const doctors = [
  //   {
  //     id: "1",
  //     name: "Dr. Spock",
  //     specialty: "psychology",
  //     gender: "male",
  //     email: "spock@enterprise.com",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdDuXnAvkahMMWjfzhzuQmNWmIjCGkZADRQ&usqp=CAU"
  //   },
  //   {
  //     id: "2",
  //     name: "Dr. Lilly",
  //     specialty: "neurology",
  //     gender: "female",
  //     email: "spock@enterprise.com",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rOZeZ5IaRsYIB_uVWdhWoqnU1oF2VpsKnA&usqp=CAU"
  //   }
  // ];

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

  return (
    <div className="App">
      <Router>
        <NavBar />
        <AddAppointment handleAddAppt={handleAddAppt} />
        <AppointmentsList appointments={appointments} />
        <Routes>
          {/* <Route path="/" element={<DoctorsList doctors={doctors} />} /> */}
          {/* <Route path="/add" element={<AddAppointment />} /> */}
          {/* <Route path="/appointments" element={<AppointmentsList />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
