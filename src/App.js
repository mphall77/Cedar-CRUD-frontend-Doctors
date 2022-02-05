import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

// COMPONENTS
import DoctorsList from "./Components/DoctorsList";
import NavBar from "./Components/NavBar";
import AddAppointment from "./Components/AddAppointment";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AddAppointment />
        <Routes>
          <Route path="/" element={<DoctorsList />} />
          {/* <Route path="/add" element={<AddAppointment />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
