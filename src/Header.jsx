import { Link } from "react-router-dom";
import logo_uva from "./assets/logo_uva2.png";
import mode from "./assets/mode.png";
import { useState } from "react";

export function Header() {

    const [bt, setBt] = useState("xpress");
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const hadleClick = () => {
        setIsDarkTheme(!isDarkTheme); // Toggle the state on click
        const bodyElement = document.body;
        if (isDarkTheme) {
        bodyElement.setAttribute('data-bs-theme', 'light'); // Set light theme
        } else {
        bodyElement.setAttribute('data-bs-theme', 'dark'); // Set dark theme
        }
        };

    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-xl navbar-dark bg-warning">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={logo_uva}
                            height="90"
                            style={
                                { padding: '0px' }
                            } />
                    </a>
                    <button className="navbar-toggler order-first collapsed bg-primary" 
                    type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" 
                    aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">                            
                            {/* -------HOME------ */}
                            <li className="nav-item">
                                <Link className="btn btn-lg btn-outline-primary mt-3 me-2" to="/">
                                    Home
                                </Link>
                            </li>
                            {/* ----------Usuarios------ */}
                            <li className="nav-item dropdown">
                                <a role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                className="btn btn-lg btn-outline-primary dropdown-toggle mt-3 me-2">
                                    Usuarios
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="inserirUsuario">
                                            Adicionar
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item" to="listarUsuarios">
                                            Listar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="listarUsuarios">
                                            Alterar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="listarUsuarios">
                                            Excluir
                                        </Link>
                                    </li>                                    
                                </ul>
                            </li>
                            <li class="nav-item mt-1 me-2" style={{marginLeft:'80%'}}>
                                <button class="btn btn-primary rounded-circle" 
                                style={{width: 75, height: 75,}} onClick={hadleClick}>
                                    <img src={mode} alt="Light ou Dark modo" style={{width: '100%', height: '100%',}} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
