import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <section className="header__container">
      <div className="header__title">
        <h2>NavBar</h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">New Appointment</NavLink>
          </li>
          <li>
            <NavLink to="/appointments">Appointment List</NavLink>
          </li>
          <li>
            <NavLink to="/doctors">Doctors</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default NavBar;
