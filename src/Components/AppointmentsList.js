import { Link } from "react-router-dom";
import AppointmentCard from "./AppointmentCard";
import "../styles/AppointmentsList.scss";

const AppointmentsList = (props) => {
  const handleDeleteAppt = (id) => {
    props.getApptID(id);
  };

  return (
    <div className="list__wrapper">
      <h2 className="list__title">Appointments</h2>

      <Link to="/add">
        <button className="list__btn">New Appointment</button>
      </Link>

      <div className="list__content">
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
