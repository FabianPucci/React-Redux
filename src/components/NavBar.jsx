import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cerrarSesionAction } from "../redux/usuarioDucks";
import pokemonLogo from "../Images/pokemonLogo.png";
import mainLogo from "../Images/mainLogo.png";
import profileLogo from "../Images/profileLogo.png";
import logoutLogo from "../Images/logoutLogo.png";
import loginLogo from "../Images/loginLogo.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const activo = useSelector((store) => store.usuario.activo);
  // console.log(activo);
  return (
    <div className="navbar navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        <img src={pokemonLogo} width="160px" alt="" />
      </NavLink>
      <div className="d-flex">
        {activo ? (
          <>
            <NavLink className="btn btn-dark mr-2" to="/">
              <img src={mainLogo} width="100px" alt="" />
            </NavLink>
            <NavLink className="btn btn-dark mr-2" to="/perfil">
              <img src={profileLogo} width="100px" alt="" />
            </NavLink>
            <button
              onClick={() => dispatch(cerrarSesionAction())}
              className="btn btn-dark mr-2"
            >
              <img src={logoutLogo} width="100px" alt="" />
            </button>
          </>
        ) : (
          <NavLink className="btn btn-dark mr-2" to="/Login">
            <img src={loginLogo} width="100px" alt="" />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
