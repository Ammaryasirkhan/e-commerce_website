import React from "react";
import "./Navbar.css";
import navLogo from "../../Assets/nav-logo.svg";
import navProfile from "../../Assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="navbarr">
      <div className="navbar">
        <img className="nav-logo" src={navLogo} alt="" />
        <img src={navProfile} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
