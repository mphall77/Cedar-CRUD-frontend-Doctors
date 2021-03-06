import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import "../styles/AddAppointment.scss";

const EditAppointment = (props) => {
  const { id } = useParams();
  // let history = useHistory();

  const [appointment, setAppointment] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleTextChange = (e) => {
    e.preventDefault();
    setAppointment({ ...appointment, [e.target.id]: e.target.value });
    // history.push(`/appointments/${id}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.updateAppointment(appointment, id);
    // history.push(`/appointments/${id}`);
  };

  return (
    <div className="form__container">
      <h2 className="form__title">Edit Appointment</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__name">
          <label className="form__label" htmlFor="userName"></label>
          <input
            className="form__input"
            required
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={appointment.name}
            onChange={handleTextChange}
          />
        </div>

        <div className="field">
          <label className="form__label" htmlFor="userEmail"></label>
          <input
            required
            className="form__input"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={appointment.email}
            onChange={handleTextChange}
          />
        </div>

        <div className="field">
          <label className="field__label" htmlFor="userPhone"></label>
          <input
            // required
            className="form__input"
            id="phone"
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            value={appointment.phone}
            onChange={handleTextChange}
          />
        </div>
        <button className="form__btn" type="submit">
          Submit Edits
        </button>
      </form>

      <Link to={`/appointments/${id}`}>
        <button className="form__backBtn" type="submit">
          Nevermind!
        </button>
      </Link>
    </div>
  );
};
export default EditAppointment;
