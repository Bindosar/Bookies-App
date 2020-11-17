import React from "react";
import { Link } from "react-router-dom";
import { ThemeButton } from "../styles";
import logo2 from "../img/navbarlogo2.png";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link active" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="#">
            Features
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
