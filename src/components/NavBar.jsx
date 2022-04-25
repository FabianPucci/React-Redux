import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cerrarSesionAction } from "../redux/usuarioDucks";
import pokemonLogo from "../Images/pokemonLogo.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const activo = useSelector((store) => store.usuario.activo);
  // console.log(activo);
  return (
    <div className="navbar navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        <img src={pokemonLogo} width="150px" alt="" />
      </NavLink>
      <div className="d-flex">
        {activo ? (
          <>
            <NavLink className="btn btn-dark mr-2" to="/">
              Main
            </NavLink>
            <NavLink className="btn btn-dark mr-2" to="/perfil">
              Profile
            </NavLink>
            <button
              onClick={() => dispatch(cerrarSesionAction())}
              className="btn btn-dark mr-2"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink className="btn btn-dark mr-2" to="/Login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
