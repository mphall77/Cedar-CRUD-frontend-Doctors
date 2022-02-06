import DoctorDetails from "../Components/DoctorDetails";

const Show = ({ doctors }) => {
  return (
    <section>
      <DoctorDetails doctors={doctors} />
    </section>
  );
};

export default Show;
