import React, { useState } from "react";
import Pokemones from "./components/Pokemones";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import { auth } from "./firebase/firebase";
import Perfil from "./components/Perfil";

function App() {
  const [googleUser, setGoogleUser] = useState(false);
  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        // console.log(user);
        if (user) {
          setGoogleUser(user);
        } else {
          setGoogleUser(null);
        }
      });
    };
    fetchUser();
  }, []);
  return googleUser !== false ? (
    <BrowserRouter>
      <div className="container mt-3">
        <NavBar />
        <Routes>
          <Route path="/" element={<Pokemones />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </BrowserRouter>
  ) : (
    <div>Cargando....</div>
  );
}

export default App;
