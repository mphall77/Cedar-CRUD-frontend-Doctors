import { FaTrash } from "react-icons/fa";
// import docImage from "../Images/use-icon.jpeg";

const DoctorCard = ({ doctor }) => {
  const { id, name, email, gender, image } = doctor;

  return (
    <>
      <section className="item">
        <div className="content" key={id}>
          <img className="ui avatar image" src={image} alt="doctor" />
          <div className="header">{name}</div>
          <div className="header">{email}</div>
          <div className="header">{gender}</div>
          <FaTrash style={{ color: "red" }} />
          <button>Book Appointment</button>
        </div>
      </section>
    </>
  );
};
export default DoctorCard;
