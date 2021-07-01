import React from 'react'
import logo from '../assets/img/logo-software.png';
import {
    Link
} from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" className="logo-nav" />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link to="/" className="nav-link" aria-current="page">Inicio</Link></li>
                            <li className="nav-item"><Link to="/ofertas" className="nav-link">Ofertas</Link></li>
                            <li className="nav-item"><Link to="/perfil" className="nav-link">Perfil</Link></li>
                            <li className="nav-item"><Link to="/registrate" className="nav-link">Registrate</Link></li>
                            <li className="nav-item"><Link to="/sesion" className="nav-link">Inicia Sesión</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
