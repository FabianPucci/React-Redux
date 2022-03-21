import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokeDetalleAction } from "../redux/pokeDucks";

const Detalle = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const FetchData = () => {
      dispatch(PokeDetalleAction());
    };
    console.log("efect");
    FetchData();
  }, [dispatch]);

  const pokemon = useSelector((store) => store.pokemones.unPokemon);
  console.log(pokemon);

  return pokemon ? (
    <div className="card mt-5 text-center">
      <div className="card-body">
        <img src={pokemon.img} alt="" className="img-fluid" />
        <div className="car-tittle text-uppercase">{pokemon.name}</div>
        <p className="class-text">
          Alto: {pokemon.height}/ Peso:{pokemon.weight}
        </p>
      </div>
    </div>
  ) : null;
};

export default Detalle;
