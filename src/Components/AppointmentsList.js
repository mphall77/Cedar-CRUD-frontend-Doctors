import AppointmentCard from "./AppointmentCard";

const AppointmentsList = ({ appointments }) => {
  return (
    <>
      <div className="ui celled list">
        {appointments.map((appointment) => {
          return <AppointmentCard appointment={appointment} />;
        })}
      </div>
    </>
  );
};

export default AppointmentsList;
