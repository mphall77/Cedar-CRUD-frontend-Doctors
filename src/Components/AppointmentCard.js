import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import "../styles/AppointmentCard.scss";

const AppointmentCard = (props) => {
  const { id, name, email, phone, image } = props.appointment;

  return (
    <div className="card__container">
      <div className="card" key={id}>
        <div className="card__body">
          <div className="card__icons">
            <div className="card__icon-edit">
              <Link to="/edit">
                <FaEdit />
              </Link>
            </div>

            <div className="card__icon-trash">
              <FaTrash onClick={() => props.handleClick(id)} />
            </div>
          </div>
          <Link to={`/appointment/{id}`}>
            <img
              className="card__image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODg2jEqoSFCjxwNkQ-APX6iB0Wd5M7bTNDA&usqp=CAU"
              alt="user"
            />

            <h4 className="card__title">Name: {name}</h4>
            <p className="card__description">Email: {email}</p>
            <p className="card__description">Phone: {phone}</p>
          </Link>

          <Link to="/add">
            <button className="card__btn">New Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
