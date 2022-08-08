import React from 'react';
import {Link} from "react-router-dom";

function Header () {
    return (
       <Header>
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <ul>
        <li className="nav-link active" aria-current="page">
            <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
        <Link to="/listado">Listado</Link>
        </li>
        <li className="nav-link">
        <Link to="/contacto">Contacto</Link> 
        </li>
        </ul>
      </div>
    </div>
  </div>
</nav>  
       </Header>
    )
}
 export default Header;