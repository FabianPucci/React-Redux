import axios from "axios";

// redux maneja 3 tipos de archivos :
// constantes    toman estados

const dataInicial = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

//types
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";
const MAS_POKEMONES_EXITO = "MAS_POKEMONES_EXITO";
const MENOS_POKEMONES_EXITO = "MENOS_POKEMONES_EXITO";
const POKEMON_DETALLE_EXITO = "POKEMON_DETALLE_EXITO";

//reducer

export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, ...action.payload };
    case MAS_POKEMONES_EXITO:
      return { ...state, ...action.payload };
    case MENOS_POKEMONES_EXITO:
      return { ...state, ...action.payload };
    case POKEMON_DETALLE_EXITO:
      return { ...state, unPokemon: action.payload };
    default:
      return state;
  }
}

//acciones

export const obtenerPokemonesAction = () => async (dispatch) => {
  if (localStorage.getItem("offset=0")) {
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem("offset=0")),
    });
    return;
  }
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
    );
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data,
    });
    localStorage.setItem("offset=0", JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const masPokemonesAction = () => async (dispatch, getState) => {
  const next = getState().pokemones.next;
  if (localStorage.getItem(next)) {
    dispatch({
      type: MAS_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(next)),
    });
    return;
  }
  try {
    const res = await axios.get(`${next}`);

    dispatch({
      type: MAS_POKEMONES_EXITO,
      payload: res.data,
    });
    localStorage.setItem(next, JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const menosPokemonesAction = () => async (dispatch, getState) => {
  const previous = getState().pokemones.previous;

  if (localStorage.getItem(previous)) {
    console.log("funciona");
    dispatch({
      type: MENOS_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem(previous)),
    });
    return;
  } else if (localStorage.getItem("offset=0")) {
    console.log("funciona offset");
    dispatch({
      type: MENOS_POKEMONES_EXITO,
      payload: JSON.parse(localStorage.getItem("offset=0")),
    });
    return;
  }
  try {
    const res = await axios.get(`${previous}`);
    dispatch({
      type: MENOS_POKEMONES_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const PokeDetalleAction =
  (url = "https://pokeapi.co/api/v2/pokemon/1/") =>
  async (dispatch) => {
    try {
      const res = await axios.get(url);

      dispatch({
        type: POKEMON_DETALLE_EXITO,
        payload: {
          name: res.data.name,
          height: res.data.height,
          weight: res.data.weight,
          img: res.data.sprites.front_default,
        },
      });
    } catch (error) {
      console.log("ERROR!!!!" + error);
    }
  };
