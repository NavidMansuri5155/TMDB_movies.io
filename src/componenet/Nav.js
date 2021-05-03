import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Nav.css";

function Nav() {
    const [click, setClick] = useState(true);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <b>TMDB_APP</b>
                        <i className="fas fa-code"></i>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/web"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                WEB_SHOW
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/movies"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                MOVIES
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/tv"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                TV
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/music"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                MUSIC
              </NavLink>
                        </li>
                    </ul>
                    <form className="navbar-form navbar-left" action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" name="search" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;