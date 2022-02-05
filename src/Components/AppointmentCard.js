import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppointmentCard = ({ appointment }) => {
  const { id, name, email, phone } = appointment;

  return (
    <>
      <section className="item">
        <div className="content" key={id}>
          <div className="header">{name}</div>
          <div className="header">{email}</div>
          <div className="header">{phone}</div>
          <FaTrash style={{ color: "red" }} />
          <Link to="/add">
            <button>Book Appointment</button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default AppointmentCard;
