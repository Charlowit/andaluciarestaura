import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logout } from '../../actions/auth';


export class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };

    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    }


    render() {

        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (


           <div className={this.state.isActive ? "navbar-menu is-active" : "navbar-menu"} >

                <div className="columns is-mobile">
                    <div className="column">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/admin-page">Datos Negocio</Link>
                            <Link className="navbar-item" to="/servicios-page">Servicios</Link>
                            <Link className="navbar-item" to="/carta-page">Carta</Link>
                            <Link className="navbar-item" to="/reservas-page">Reservas</Link>
                            <Link className="navbar-item" to="/delivery-page">Delivery</Link>
                            <a className="navbar-item">Aforo</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="navbar-end">
                            <div className="navbar-item is-centered">
                                 <img className="is-rounded is-square" src={"/static/frontend/1/logo1.jpeg"}  alt="Placeholder image"/>
                            </div>
                            <div className="navbar-item">
                                <div className="media-content">
                                    <p className="subtitle is-6">{user ? `Bienvenido ${user.cif}` : ""}</p>
                                </div>
                            </div>
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link to="/" className="button" onClick={this.props.logout}>Logout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

        );

        const guestLinks = (
             <div className={this.state.isActive ? "navbar-menu is-active" : "navbar-menu"} >
                <div class="navbar-end has-text-centered ">
                  <div class="navbar-item">
                    <Link to="/register-page">
                       <p className="button">Registro</p>
                    </Link>
                  </div>
                  <div class="navbar-item">
                    <Link to="/">
                        <p className="button">Login</p>
                    </Link>
                  </div>
                </div>
             </div>
        );

        return (
            <React.Fragment>
                <header>
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="columns is-mobile" style={{width: '100%'}}>
                            <div className="column is-one-fifth">
                                <div className="navbar-brand">
                                    <p className="navbar-item" href="#">
                                        <Link to="/">
                                            <img src={"/static/frontend/logoar.svg"} width="300" height="125" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="column">
                                <div>

                                    <a onClick={() => {this.setState({ isActive: !this.state.isActive })}}
                                    className={this.state.isActive ? "navbar-burger burger is-active" : "navbar-burger burger"} >

                                        <span aria-hidden="true"></span>
                                        <span aria-hidden="true"></span>
                                        <span aria-hidden="true"></span>
                                    </a>


                                </div>

                                    {isAuthenticated ? authLinks : guestLinks}

                            </div>

                        </div>
                    </nav>
                </header>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,

});

export default connect(mapStateToProps, { logout })(Navbar);
