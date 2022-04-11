import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pokeReducer from "./pokeDucks";
import usuariosReducer, { leerUsuarioAction } from "./usuarioDucks";

const rootReducer = combineReducers({
  pokemones: pokeReducer,
  usuario: usuariosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  leerUsuarioAction()(store.dispatch);
  return store;
}
