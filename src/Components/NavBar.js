import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import "../styles/NavBar.scss";

const NavBar = () => {
  const [active, setActive] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <NavLink to={"/"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFAQGodkDEM-Ho6LI6d2LVndwY8Vbvpw5zg&usqp=CAU"
              alt="Natural Healing Institute"
            />
          </NavLink>
        </div>

        {/* NAV LINKS */}
        <div
          className={
            active
              ? "navbar__menuItems navbar__menuItems-active"
              : "navbar__menuItems"
          }
        >
          <ul>
            <li>
              <NavLink to="/doctors">Doctors</NavLink>
            </li>
            <li>
              <NavLink to="/add">New Appointment</NavLink>
            </li>
            <li>
              <NavLink to="/appointments">Appointments</NavLink>
            </li>
          </ul>
        </div>

        {/* PATIENT PORTAL */}
        {/* <button className="navbar__portalBtn">my portal</button> */}

        {/* MOBILE MENU ICON */}
        <div
          className="navbar__mobileMenuIcon"
          onClick={() => setActive(!active)}
        >
          <BiMenu />
        </div>
      </nav>
      <h2>The Natural Healing Institute</h2>
    </header>
  );
};

export default NavBar;
