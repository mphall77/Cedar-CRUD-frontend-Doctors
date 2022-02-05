import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

// COMPONENTS
import DoctorsList from "./Components/DoctorsList";
import NavBar from "./Components/NavBar";
import AddAppointment from "./Components/AddAppointment";
import AppointmentsList from "./Components/AppointmentsList";

export default function App() {
  const doctors = [
    {
      id: "1",
      name: "Dr. Spock",
      specialty: "psychology",
      gender: "male",
      email: "spock@enterprise.com"
    },
    {
      id: "2",
      name: "Dr. Lilly",
      specialty: "neurology",
      gender: "female",
      email: "spock@enterprise.com"
    }
  ];

  const appointments = [
    {
      id: "111",
      patient: "Suzy Q",
      email: "suzy@gmail.com",
      phone: "123-456-7890"
    },
    {
      id: "222",
      patient: "Bobby Blue",
      email: "bobbyy@yahoo.com",
      phone: "456-789-0123"
    }
  ];

  return (
    <div className="App">
      <Router>
        <NavBar />
        <AddAppointment />
        <AppointmentsList appointments={appointments} />
        <Routes>
          <Route path="/" element={<DoctorsList doctors={doctors} />} />
          {/* <Route path="/add" element={<AddAppointment />} /> */}
          {/* <Route path="/appointments" element={<AppointmentsList />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
