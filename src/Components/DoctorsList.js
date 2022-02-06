// import {useState} from "react";
// import { Link } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import "../styles/AppointmentsList.scss";

const DoctorsList = ({ doctors }) => {
  return (
    <>
      <div className="card__wrapper">
        {doctors.map((doctor) => {
          return <DoctorCard doctor={doctor} key={doctor.id} />;
        })}
      </div>
    </>
  );
};

export default DoctorsList;
