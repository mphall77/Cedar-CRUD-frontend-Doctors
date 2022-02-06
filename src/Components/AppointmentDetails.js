import { Link } from "react-router-dom";

const AppointmentDetails = (props) => {
  console.log("details", props);
  return (
    <div className="details__wrapper">
      <h2>Appointment Details </h2>
      <div className="details__card">
        <div className="details__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRiVHLJainuytCbmNLFJuusWNBkTz3zqpVQ&usqp=CAU"
            alt="user"
          />
        </div>
        <div className="details__content">
          <p>Name</p>
          <p>Email</p>
        </div>
      </div>
      <Link to="/appointments">
        <button className="detail__btn" type="submit">
          Back to List
        </button>
      </Link>
    </div>
  );
};
export default AppointmentDetails;
