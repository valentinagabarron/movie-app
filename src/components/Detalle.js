import React from 'react';
import { Navigate } from "react-router-dom";
function Detalle () {
    let token = sessionStorage.getItem("token");
   

    return (
    <>
        { !token && <Navigate replace to="/" /> }
         <h2>Detalle de la película</h2>
    </>
    );
}

export default Detalle;