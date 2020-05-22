import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavbarLog extends Component {

    render() {
        return (
            <React.Fragment>
                <header>
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <p className="navbar-item" href="#">
                                <NavLink to="/">
                                    <img src="https://cdn.discordapp.com/attachments/451551902186995713/713100395819434024/WhatsApp_Image_2020-05-21_at_20.42.20_1.jpeg" width="200" height="50" />
                                </NavLink>
                                
                            </p>
                            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                    <NavLink to="/login">
                                        <p className="button">Log in</p>
                                    </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <hr />
            </React.Fragment>
        );
    }
}


export default NavbarLog;
