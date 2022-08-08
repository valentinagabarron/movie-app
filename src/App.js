//Librerías
import React from 'react';

//Componentes
import { Routes,Route } from "react-router-dom";
import Login from './components/Login';
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from './components/Footer';
import Detalle from "./components/Detalle";

//Styles
import "./css/bootstrap.min.css";

function App() {
  return (
    <>
    <div className='container mt-3'>
    <Header />
    <Routes>
    <Route exact path="/" element={<Login />} />
    <Route path="/listado" element={<Listado />} />
    <Route path="/detalle" element={<Detalle />} />

    </Routes> 
    <Footer />
    </div>
    </>
  );
}

export default App;
