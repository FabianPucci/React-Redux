import React from "react";
import { useDispatch } from "react-redux";
import { IngresoUsuarioAction } from "../redux/usuarioDucks";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="mt-5 text-center">
      <h2>Google Access</h2>
      <button
        className="btn btn-dark"
        onClick={() => dispatch(IngresoUsuarioAction())}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
