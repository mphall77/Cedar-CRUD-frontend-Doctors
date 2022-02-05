import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppointmentCard = (props) => {
  const { id, name, email, phone, image } = props.appointment;

  return (
    <>
      <section className="item">
        <div className="content" key={id}>
          <img src={image} alt="user" />
          <div className="header">{name}</div>
          <div className="header">{email}</div>
          <div className="header">{phone}</div>
          <FaTrash
            style={{ color: "red" }}
            onClick={() => props.handleClick(id)}
          />
          <Link to="/add">
            <button>Book Appointment</button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default AppointmentCard;
