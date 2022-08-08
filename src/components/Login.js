import React from 'react';
import axios from "axios";
import swAlert from '@sweetalert/with-react';
import { useNavigate, Navigate } from "react-router-dom";

function Login() {

    const history = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const email= e.target.email.value;
        const password= e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;

        if(email === '' || password === '' ) {
            swAlert(
            <h2>Los campos no pueden estar vacíos</h2>
            );
            return;
        }
        if (email !== "" && !regexEmail.test(email)) {
            swAlert(<h2>Debes escrbir una dirección de correo electrónico válida</h2>);
            return;
        }
        if (email !== "challenge@alkemy.org" || password !== "react") {
            swAlert(<h2>Credenciales inválidas</h2>);
            return
        }
    
        axios
          .post("http://challenge-react.alkemy.org" , { email, password })
          .then(res => {
            swAlert(<h2>Perfecto, ingresaste correctamente</h2>)
            console.log(res.data);
            const tokenRecibido = res.data.token;
            sessionStorage.setItem("token", tokenRecibido);
            history("/listado");
            });

    }
    let token = sessionStorage.getItem("token");
    return (
    <>
    { token && <Navigate replace to="/listado" /> }
    {/*/si tengo en token entonces no se puede volver a home */}
    <h2>Formulario de Login</h2>
    <form onSubmit={submitHandler}>
        <label>
            <span>Correo electrónico</span> <br />
            <input type="text" name="email" className="form-control"/>
        </label>
        <br />
        <label>
            <span>Contraseña:</span> <br />
           <input type="password" name="password" className="form-control"/>
        </label>
    <br />
    <button type="submit" className="btn btn-dark">Ingresar</button>
    </form>
    </>
    )
}
export default Login;