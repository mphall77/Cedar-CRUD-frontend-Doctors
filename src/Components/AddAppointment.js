import React from "react";
import { Button } from "semantic-ui-react";

class AddAppointment extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Appointment</h2>
        <form className="ui form">
          <div className="field">
            <label htmlFor="userName">name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="field">
            <label htmlFor="userEmail">mail</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <label htmlFor="userPhone">phone</label>
            <input type="phone" name="phone" placeholder="Phone Number" />
          </div>
          <Button type="submit" color="blue" className="ui button blue">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
export default AddAppointment;
