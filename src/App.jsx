import React from "react";
import Pokemones from "./components/Pokemones";
import { firebase } from "./firebase/firebase.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

function App() {
  console.log(firebase);

  return (
    <BrowserRouter>
      <div className="container mt-3">
        <NavBar />
        <Routes>
          <Route path="/" element={<Pokemones />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
