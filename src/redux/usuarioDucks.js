import { firebase, auth, dataBase } from "../firebase/firebase.js";

//data incial
const dataInicial = {
  loading: false,
  activo: false,
};

//types
const LOADING = "LOADING";
const USUARIO_ERROR = "USUARIO_ERROR";
const USUARIO_EXITO = "USUARIO_EXITO";
const CERRAR_SESION = "CERRAR_SESION";

//reducer
export default function usuariosReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case USUARIO_ERROR:
      return { ...dataInicial };
    case USUARIO_EXITO:
      return { ...state, loading: false, user: action.payload, activo: true };
    case CERRAR_SESION:
      return { ...dataInicial };
    default:
      return { ...state };
  }
}

//action

export const IngresoUsuarioAction = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    // console.log(res);
    const usuario = {
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName,
      photoURL: res.user.photoURL,
    };
    const usuarioDataBase = await dataBase
      .collection("usuarios")
      .doc(usuario.email)
      .get();

    if (usuarioDataBase.exists) {
      console.log("usuario existe");
      dispatch({
        type: USUARIO_EXITO,
        payload: usuarioDataBase.data(),
      });
      localStorage.setItem("usuario", JSON.stringify(usuarioDataBase.data()));
    } else {
      console.log(" usuario no existe");

      await dataBase.collection("usuarios").doc(usuario.email).set(usuario);
      dispatch({
        type: USUARIO_EXITO,
        payload: {
          uid: res.user.uid,
          email: res.user.email,
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        },
      });
      localStorage.setItem(
        "usuario",
        JSON.stringify({
          uid: res.user.uid,
          email: res.user.email,
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        })
      );
    }
    console.log(usuarioDataBase);
  } catch (error) {
    console.log(error);
    dispatch({
      type: USUARIO_ERROR,
    });
  }
};

export const leerUsuarioAction = () => (dispatch) => {
  if (localStorage.getItem("usuario")) {
    dispatch({
      type: USUARIO_EXITO,
      payload: JSON.parse(localStorage.getItem("usuario")),
    });
  }
};

export const cerrarSesionAction = () => (dispatch) => {
  auth.signOut();
  dispatch({
    type: CERRAR_SESION,
  });
  localStorage.removeItem("usuario");
};
