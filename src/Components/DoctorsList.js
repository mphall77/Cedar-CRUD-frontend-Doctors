import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

// COMPONENTS
import DoctorCard from "./DoctorCard";
import SearchBar from "./SearchBar";
import EmptyList from "./EmptyList";
import "../styles/AppointmentsList.scss";

const DoctorsList = ({ doctors }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      let lowerCaseSearchTerm = searchTerm.toLowerCase();

      let filteredDoctorsList = doctors.filter((doctor) => {
        let drName = `${doctor.name}`.toLowerCase();

        return drName.includes(lowerCaseSearchTerm);
      });
      setFilteredDoctors(filteredDoctorsList);
    } else {
      setFilteredDoctors([]);
    }
  }, [searchTerm]);

  return (
    <div className="doctorsList__container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="card__wrapper">
        {searchTerm &&
          filteredDoctors.map((doctor) => {
            return <DoctorCard doctor={doctor} key={doctor.id} />;
          })}

        {searchTerm && filteredDoctors.length === 0 && <EmptyList />}

        {doctors.length > 0 &&
          !searchTerm &&
          doctors.map((doctor) => {
            return <DoctorCard doctor={doctor} key={doctor.id} />;
          })}
      </div>
    </div>
  );
};

export default DoctorsList;
