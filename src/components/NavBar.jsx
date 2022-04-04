import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        PokeApp
      </NavLink>
      <div className="d-flex">
        <NavLink className="btn btn-dark mr-2" to="/">
          Main
        </NavLink>
        <NavLink className="btn btn-dark mr-2" to="/Login">
          Login
        </NavLink>
        <button className="btn btn-dark mr-2">Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
