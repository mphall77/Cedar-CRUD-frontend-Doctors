import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AppointmentsList.scss";

// COMPONENTS
import AppointmentCard from "./AppointmentCard";
import SearchBar from "./SearchBar";
import EmptyList from "./EmptyList";

const AppointmentsList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  const handleDeleteAppt = (id) => {
    props.getApptID(id);
  };

  useEffect(() => {
    if (searchTerm) {
      let lowerCaseSearchTerm = searchTerm.toLowerCase();

      let filteredAppointmentsList = props.appointments.filter(
        (appointment) => {
          return Object.values(appointment)
            .join(" ")
            .toLowerCase()
            .includes(lowerCaseSearchTerm);
        }
      );
      setFilteredAppointments(filteredAppointmentsList);
    } else {
      setFilteredAppointments([]);
    }
  }, [searchTerm]);

  return (
    <div className="appointmentList__container">
      <h2 className="list__title">List of Appointments</h2>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Link to="/add">
        <button className="list__btn">New Appointment</button>
      </Link>

      <div className="list__content">
        {searchTerm &&
          filteredAppointments.map((appointment) => {
            return (
              <AppointmentCard
                appointment={appointment}
                handleClick={handleDeleteAppt}
                key={appointment.id}
              />
            );
          })}
        {searchTerm && filteredAppointments.length === 0 && <EmptyList />}

        {props.appointments.map((appointment) => {
          return (
            <AppointmentCard
              appointment={appointment}
              handleClick={handleDeleteAppt}
              key={appointment.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AppointmentsList;
