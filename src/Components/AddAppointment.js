import React from "react";
// import { useHistory, useNavigate} from "react-router-dom";
import "../styles/AddAppointment.scss";

class AddAppointment extends React.Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  handleAddAppt = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Please fill in all fields");
      return;
    }
    this.props.handleAddAppt(this.state);
    this.setState({ name: "", email: "", phone: "" });
    console.log(this.state);
    // this.props.history.push("/");
  };

  render() {
    return (
      <div className="form__container">
        <h2 className="form__title">Add Appointment</h2>
        <form className="form" onSubmit={this.handleAddAppt}>
          <div className="form__name">
            <label className="form__label" htmlFor="userName"></label>
            <input
              className="form__input"
              required
              type="text"
              name="name"
              placeholder="Name"
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
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="userPhone"></label>
            <input
              // required
              className="form__input"
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>

          <button className="form__btn" type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    );
  }
}
export default AddAppointment;
