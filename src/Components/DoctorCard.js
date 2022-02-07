import { Link } from "react-router-dom";
import "../styles/DoctorCard.css";

const DoctorCard = ({ doctor }) => {
  const { id, name, specialty, gender, image } = doctor;

  return (
    <div className="card  doctors-list-card">
      <div className="img-container">
        <img
          // src={doctor.img_url}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX///9useFor+DK4vNxs+Ln8vrs9fv7/f6TxOh9ueSv0+7w9/yKwOd3tuObyOq11u/f7vi82fDZ6venz+zS5vbI4POizOuYx+mPwuji8PnA3PGCvOXJiWJwAAAGGElEQVR4nO2da5eiMAxApfJQKoqMii7//38u+BwYHn0kNMXcb7s7nMPdAknTNrNaMQzDMAzDMAyzKBIZ5af1cX3KI5m4vhlwZHHYVKF4EVabQyFd3xQc8lxmtVbwm/rPWXlehmRxyTp2H8vsUri+PWuKTdCv95QMNn473jYDw/d7IK+569s0Rqaj4/d2DFNP38eiUvG7O1ZePqr/QlXB5nX85/p2tUku6n53x4tnSUCy0ROsFTdeKUptwUbRo+9NctUXrBWv3oxiUpoI1oqlL4o/ZoK14o/rW1fjbCpYK55d37wKubFfgwcZnNlX5j2IHnxtjjaCteLRtcAUsZVfQ+xaYQLNZK1nEC+uFca5WQ9hENxcS4xiHAp/DSLpoBiHAGMYUn4TLT+kDyh/ThPlWf2oYUU3JuYQgrUi3cQmBTJMXYsMAvKQNo+pa5EhJMSXtCGkOtsvYIawHkSqxcUDmOHBtcoA1jnp25Bobmo3M2wZEp0lJhWQYBAQjfkyAzPMaH5MwYIF2XBhP73/QHN6ATJ1ekB0AsWGbMiG7mFDNmRD97AhG7Khe9jQf8Plz4CXX8VYfiVq+dXE5VeEv6Cqv/yVmeWvrq12QCukO9cigwC9iGRfw2/YqQAU84nG+zuL3zG0iiFS04zmxOLJ4nfurSL7kBhGriXGsR5E4kMIkNfQzWde/LPcyU7/mN7yTyOsbjbPaUh7k/eTtcWpoLXrm1fD/GQX3Y2lbZZ/Os/gjOxd0KdzsiaKXgmaPKgePaIPFn9aveas03Eg9OLwaJdcuTAldnTrFqMkB6VhFMGBfLY9SFQqdG8pvcjUBinK8Q48YUm1vq1O/jPSRenH0xewg1zvm05YoiVX6+3X/r5/f5D5cV9l725mWbU/5gvSe5LI+FacTqfiFi+wIx3DMC6Qkc7yQxz59e1pOl1uxVY9HMj6p0tvumHG5zK8h3exU71j2cxCmqaf5Zn0ulODPF/Dd/KiOm3/FARqySvplp+3dNvOzdRWWX7a+dw2pTrZ6GnkqbSc+2fhmGjLz6K3kadCa6u+xllCkHPMh6aB4dSdFv3LHCIoKU2sknS4XLEdX9KNtkMXijAlEyNPY90ixsNiHQhHLq1OszmMIScqo2NLglOLjeJCIHTkk+0+Roq9k6tUonL+NqrUfQcXzRS6vbiuFSvW7gfCotqSv9N6v/riRN8n46R4rdg7U0z2yisT2d/XKVfeIeZsWUpn14X4ExajsTjRvXrnRDHR2hHcbeClebULRd1l3vbbpPGAP66e/0HVvcXOVEp7u8bsX1TdJd77TX62bxtsCJ9b0WjP+ns/kNGeonn3t6uGsg7PqVRhdnVvUEVCPZS1EVkTM6LMcM9UT1BFQhr31hOVtLx6Hiz2AYurtNidOdf+YatzI8Kqt+I8Z030shFY5sltwE4ZGinOEDIiuPPMJmT4ZxXAjsKagX+AFuycqLEidqkY7Ly2seEVV/DkWrBWxE3eDHdwgxqWmIJWZymgQD2TAdTO2g7MMwtycBllVjQ2COhicRoGEsSTNdq1GRzEHksQsAGNHWjta4g8pIiPKYFg+AArJJJ5SNEeU6CeEBAgzfVBGibAgNR2gUisaMB5ERMaCc2DLUa9hkTW/QIl+yYwNfyAMkm0bCUAC0pjAoC2JeM3/UHhhzGq39gZTXl4kU4XgzA+poBdEXtppZrTM22ETku4waIzIZpuhYoQLnCz0k5lYvq/EyEzXb4hSJMrQEP4YwsAHaAgDRG6SbEhG36t4StR6xhmUwmcN4bV5sG1nUknl+vzH4b2aHpiGE7PgZLUZ0Ol2vVAPuyJoVI9qX9OsyTD/gIYG7IhG7IhG7Lhdxl6HfGVsrb+iZQfhp0iab/gQKndF0Ox3T2oOrOn8vn3u6GTC74YflS7c/yporf/hlMXsCEbsiEbsuE3GrZXradXSL0zbG+uUDhl7J9hIKr9i1KhGYGHhr+3myj8sJeGWrAhG7Khe9iQDXsA/K3bECD85u7EqlUAOBi/BdLpOfwuKOfyY43WVdjo9CjWoDDtugKOCJH6Y8SXUFAgvOA1VoiLtXt8aYrNMAzDMAzDMF/Ff+dbcdMx4t6FAAAAAElFTkSuQmCC"
          className="doctor-img-list"
          alt="img_url"
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/doctors/${doctor.id}`}>{doctor.name}</Link>
        </h5>
        <p className="card-text"></p>
        <p className="card__description">Gender: {gender}</p>
        <p className="card-text">Specialty: {doctor.specialty}</p>
      </div>
    </div>
  );
};
export default DoctorCard;
