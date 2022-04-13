import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Perfil = () => {
  const usuario = useSelector((store) => store.usuario.user);
  const navigate = useNavigate();
  const [modoEdicion, setModoEdicion] = useState(false);

  React.useEffect(() => {
    if (!usuario) {
      navigate("/login");
    }
  }, [usuario, navigate]);
  console.log(usuario);
  return (
    <div className="mt-5 text-center">
      {usuario ? (
        <div className="card">
          <div className="card-body">
            <img src={usuario.photoURL} alt="" />
            <h5 className="card-title">{usuario.displayName}</h5>
            <p className="card-text">Email: {usuario.email}</p>
            <button className="btn btn-dark">Edit Profile</button>
          </div>
          <div className="card-body">
            <div className="row justify-content-center ">
              <div className="col-md-5">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" />
                  <button className="float-end btn btn-outline-secondary btn-warning">
                    Actualice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Perfil;
