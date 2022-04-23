import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  actualizarUsuarioAction,
  editarFotoAction,
} from "../redux/usuarioDucks";

const Perfil = () => {
  const usuario = useSelector((store) => store.usuario.user);
  const loading = useSelector((store) => store.usuario.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState(usuario.displayName);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    if (!usuario) {
      navigate("/login");
    }
  }, [usuario, navigate]);
  // console.log(usuario);

  const handleClick = (e) => {
    if (!nombreUsuario.trim()) {
      setError("campo vacio, por favor ingrese un nombre");

      return;
    }

    dispatch(actualizarUsuarioAction(nombreUsuario));

    setModoEdicion(false);
    setError(false);
  };

  const HandleEdit = () => {
    if (modoEdicion === false) {
      setModoEdicion(true);
    } else {
      setModoEdicion(false);
      setError(false);
    }
  };

  const handleImg = (e) => {
    console.log(e.target.files[0]);
    const userImg = e.target.files[0];
    if (userImg === undefined) {
    }

    if (userImg.type === "image/jpeg") {
      dispatch(editarFotoAction(userImg));

      setError(null);
    } else {
      setError("no se ingreso un archivo valido,solo archivos jgp");
      console.log("error");
      return;
    }
  };

  return (
    <div className="mt-5 text-center">
      {usuario ? (
        <div className="card">
          <div className="card-body">
            <img src={usuario.photoURL} alt="" />
            <h5 className="card-title">{usuario.displayName}</h5>
            <p className="card-text">Email: {usuario.email}</p>
            <button className="btn btn-dark" onClick={() => HandleEdit()}>
              Edit Profile
            </button>
          </div>
          {loading && (
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status"></div>
              </div>
            </div>
          )}
          {modoEdicion && (
            <div className="card-body">
              <div className="row justify-content-center ">
                <div className="col-md-5">
                  <p className="card-text">Change User Name</p>
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={nombreUsuario}
                      onChange={(e) => setNombreUsuario(e.target.value)}
                    />
                    <button
                      className="float-end btn btn-outline-secondary btn-warning"
                      onClick={() => handleClick()}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {modoEdicion && (
            <div className="d-flex justify-content-center">
              <div className="mb-3">
                <label htmlFor="formFile" className="btn btn-warning">
                  Change profile photo
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  style={{ display: "none" }}
                  onChange={(e) => handleImg(e)}
                />
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Perfil;
