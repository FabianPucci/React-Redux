import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerPokemonesAction,
  masPokemonesAction,
  menosPokemonesAction,
  PokeDetalleAction,
} from "../redux/pokeDucks";
import Detalle from "./Detalle";
import { useNavigate } from "react-router-dom";
import info from "../Images/info.png";

const Pokemones = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);
  const activo = useSelector((store) => store.usuario.activo);

  React.useEffect(() => {
    if (activo === false) {
      navigate("/login");
    }
  }, [activo, navigate]);
  // console.log(previous);
  // console.log(pokemones);
  // console.log(next);

  return (
    <div className="row">
      <div className="col-md-6">
        <h1>Pokemon List</h1>
        <div className="d-flex  ">
          {pokemones.length === 0 && (
            <button
              className="btn btn-success"
              onClick={() => dispatch(obtenerPokemonesAction())}
            >
              {" "}
              Get Pokemons
            </button>
          )}
          {next && (
            <button
              className="btn btn-success mx-4"
              onClick={() => dispatch(masPokemonesAction())}
            >
              Next Pokemons
            </button>
          )}
          {previous && (
            <button
              className="btn btn-danger"
              onClick={() => dispatch(menosPokemonesAction())}
            >
              Previous Pokemons
            </button>
          )}
        </div>
        <ul className="list-group mt-3 ">
          {pokemones.map((item) => (
            <li key={item.name} className="list-group-item text-uppercase ">
              {item.name}
              <button
                className="btn btn-dark  float-end"
                onClick={() => dispatch(PokeDetalleAction(item.url))}
              >
                <img src={info} style={{ width: "50%" }} alt="" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        <h1>Pokemon Detail</h1>
        <Detalle />
      </div>
    </div>
  );
};

export default Pokemones;
