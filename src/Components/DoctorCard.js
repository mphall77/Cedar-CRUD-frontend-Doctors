import { FaTrash } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  const { id, name, email, gender } = doctor;

  return (
    <>
      <section className="item">
        <div className="content" key={id}>
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
