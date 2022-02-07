import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import "../styles/AppointmentCard.scss";

const AppointmentCard = (props) => {
  const { id, name, email, phone, doctor, dateTime, image } = props.appointment;

  return (
    <div className="wrapper">
      <div className="card" key={id}>
        <Link to={`/appointment/{id}`}>
          <div className="card__image-wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODg2jEqoSFCjxwNkQ-APX6iB0Wd5M7bTNDA&usqp=CAU"
              alt="user"
            />
            <p className="card__description">Name: {name}</p>
            <p className="card__description">Email: {email}</p>
            <p className="card__description">Phone: {phone}</p>
          </div>
        </Link>

        <div className="card__body">
          <h5 className="card__description">Appointment with:</h5>
          <h2 className="card__title"> {doctor}</h2>
          <h4 className="card__price"> time & date: </h4>
          <h2 className="card__title"> {dateTime}</h2>

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
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
