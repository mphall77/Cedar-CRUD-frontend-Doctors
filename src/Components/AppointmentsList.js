import AppointmentCard from "./AppointmentCard";

const AppointmentsList = ({ appointments, getApptID }) => {
  const handleDeleteAppt = (id) => {
    getApptID(id);
  };

  return (
    <>
      <div className="ui celled list">
        {appointments.map((appointment) => {
          return (
            <AppointmentCard
              appointment={appointment}
              handleClick={handleDeleteAppt}
              key={appointment.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default AppointmentsList;
