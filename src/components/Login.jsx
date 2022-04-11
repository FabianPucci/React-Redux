import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IngresoUsuarioAction } from "../redux/usuarioDucks";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((store) => store.usuario.loading);
  const activo = useSelector((store) => store.usuario.activo);
  // console.log(loading, activo);

  React.useEffect(() => {
    if (activo) {
      navigate("/");
    }
  }, [activo, navigate]);

  return (
    <div className="mt-5 text-center">
      <h2>Google Access</h2>
      <button
        className="btn btn-dark"
        onClick={() => dispatch(IngresoUsuarioAction())}
        disabled={loading}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
