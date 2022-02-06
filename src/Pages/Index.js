// import { useState, useEffect } from "react";
// import DoctorsList from "../Components/DoctorsList";
// // import SearchBar from "../Components/SearchBar";
// import Tester from "../Components/Tester";
// const Index = ({ doctors }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredDoctors, setFilteredDoctors] = useState([]);

//   useEffect(() => {
//     if (searchTerm) {
//       let lowerCaseSearchTerm = searchTerm.toLowerCase();

//       let listOfFilteredDoctors = doctors.filter((doctor) => {
//         let fullName = doctor.name.toLowerCase();

//         return fullName.includes(lowerCaseSearchTerm);
//       });

//       setFilteredDoctors(listOfFilteredDoctors);
//     } else {
//       setFilteredDoctors([]);
//     }
//   }, [searchTerm, doctors]);

//   return (
//     <>
//       {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
//       <Tester searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//       <DoctorsList doctors={doctors} />
//     </>
//   );
// };
// export default Index;
