import React from "react";
// import { useHistory, useNavigate} from "react-router-dom";
import "../styles/AddAppointment.scss";
import DateTimePicker from "react-datetime-picker";

class AddAppointment extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    doctor: "",
    dateTime: ""
  };

  handleAddAppt = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Please fill in all fields");
      return;
    }
    this.props.handleAddAppt(this.state);
    this.setState({ name: "", email: "", phone: "" });
    // this.props.history.push("/add");
  };

  render() {
    return (
      <div className="form__container">
        <h2>Add Appointment</h2>
        <form className="form" onSubmit={this.handleAddAppt}>
          <div className="form__name">
            <label className="form__label" htmlFor="userName"></label>
            <input
              className="form__input"
              required
              type="text"
              name="name"
              placeholder="Name: Sandy Jones"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label className="form__label" htmlFor="userEmail"></label>
            <input
              required
              className="form__input"
              type="email"
              name="email"
              placeholder="Email: sandy@mail.com"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="userPhone"></label>
            <input
              className="form__input"
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone: 123-456-7890"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>

          <div className="field">
            <label className="form__label-select" htmlFor="select doctor">
              Choose your Doctor:
            </label>
            <select
              className="form__select"
              onChange={(e) => this.setState({ doctor: e.target.value })}
            >
              <option value="" disabled selected>
                ---
              </option>
              {this.props.doctors.map((doctor) => {
                return <option value={doctor.name}>{doctor.name} </option>;
              })}
            </select>
          </div>
          <DateTimePicker
            className="form__cal"
            onChange={(e) => this.setState({ dateTime: e.target.value })}
            value={this.state.dateTime}
          />

          <button className="form__btn" type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    );
  }
}
export default AddAppointment;
