import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cerrarSesionAction } from "../redux/usuarioDucks";

const NavBar = () => {
  const dispatch = useDispatch();
  const activo = useSelector((store) => store.usuario.activo);
  console.log(activo);
  return (
    <div className="navbar navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        PokeApp
      </NavLink>
      <div className="d-flex">
        {activo && (
          <NavLink className="btn btn-dark mr-2" to="/">
            Main
          </NavLink>
        )}
        {!activo ? (
          <NavLink className="btn btn-dark mr-2" to="/Login">
            Login
          </NavLink>
        ) : (
          <button
            onClick={() => dispatch(cerrarSesionAction())}
            className="btn btn-dark mr-2"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
