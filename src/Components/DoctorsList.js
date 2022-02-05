// import {useState} from "react";

import DoctorCard from "./DoctorCard";

const DoctorsList = ({ doctors }) => {
  return (
    <>
      <div className="ui celled list">
        {doctors.map((doctor) => {
          return <DoctorCard doctor={doctor} />;
        })}
      </div>
    </>
  );
};

export default DoctorsList;
