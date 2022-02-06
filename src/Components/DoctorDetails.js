const DoctorDetails = () => {
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
          <p>Doctor Name</p>
          <p>Doctor Email</p>
        </div>
      </div>
    </div>
  );
};
export default DoctorDetails;
