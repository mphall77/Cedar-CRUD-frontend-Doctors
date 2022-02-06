const DoctorDetails = ({ doctor }) => {
  return (
    <div className="details__wrapper">
      <h2>Appointment Details </h2>
      <div className="details__card">
        <div className="details__image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRiVHLJainuytCbmNLFJuusWNBkTz3zqpVQ&usqp=CAU"
            alt="user"
          />
          <img
            src={doctor.img_url}
            className="img-fluid rounded-start"
            alt={doctor.name}
          />
          <div className="doctor-info-form">
            <div className="single-doctor-info">
              <article className="single-doctor-info">
                <h2>{doctor.name}</h2>
                <h6>Specialty: {doctor.specialty}</h6>
              </article>
              <article className="info">
                <h3>Bio:</h3>
                <p>{doctor.bio}</p>
              </article>
            </div>
            {/* <div className="doctor-booking-form">
					<BookingForm doctor={doctor} />
				</div> */}
          </div>
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

// const DoctorDetails = ({doctor}) => {
//   return (
//     <div className="details__wrapper">
//       <h2>Appointment Details </h2>
//       <div className="details__card">
//         <div className="details__image">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRiVHLJainuytCbmNLFJuusWNBkTz3zqpVQ&usqp=CAU"
//             alt="user"
//           />
//         </div>
//         <div className="details__content">
//           <p>Doctor Name</p>
//           <p>Doctor Email</p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default DoctorDetails;
