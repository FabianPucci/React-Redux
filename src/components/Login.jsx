import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IngresoUsuarioAction } from "../redux/usuarioDucks";
// import pokeball from "./Gif/pokeball.css";

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
    <div style={{ background: "#ffcb05" }}>
      <div className="mt-5 text-center">
        <h2 className="mt-5 text-center">Google Access</h2>
        <button
          className="btn btn-dark "
          onClick={() => dispatch(IngresoUsuarioAction())}
          disabled={loading}
        >
          Login
        </button>
      </div>
      <div className="center-on-page">
        <div className="pokeball">
          <div className="pokeball__button"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
