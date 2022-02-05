import React from "react";
// import { Button } from "semantic-ui-react";

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
    console.log(this.state);
    this.setState({ name: "", email: "", phone: "" });
    // this.props.history.push();
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Appointment</h2>
        <form className="ui form" onSubmit={this.handleAddAppt}>
          <div className="field">
            <label htmlFor="userName">name</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="userEmail">mail</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor="userPhone">phone</label>
            <input
              // required
              type="phone"
              name="phone"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <button type="submit" color="blue" className="ui button blue">
            Book Appointment
          </button>
        </form>
      </div>
    );
  }
}
export default AddAppointment;
