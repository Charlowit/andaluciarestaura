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
        const authEnd = (

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <span className="control" style={{marginTop: 7}}>
                            <img className="is-rounded is-square" src={"/static/frontend/1/logo1.jpeg"} alt="Placeholder image" />
                        </span>
                        <span className="control" style={{marginTop: 10}}>
                            <div className="media-content">
                                <p className="subtitle is-6">{user ? `Bienvenido ${user.cif}` : ""}</p>
                            </div>

                        </span>
                        <span className="control">
                            <div className="buttons">
                                <Link to="/" className="button is-danger" onClick={this.props.logout}>Logout</Link>
                            </div>
                        </span>
                    </div>
                </div>
            </div>



        );

        const guestEnd = (
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <span className="control">
                            <Link to="/register-page">
                                <p className="button is-link" style={{ width: '100%' }}>Registro</p>
                            </Link>
                        </span>
                        <span className="control">
                            <Link to="/">
                                <p className="button is-link" style={{ width: '100%' }}>Login</p>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        );

        const authLinks = (
            <div className={isAuthenticated ? "navbar-start" : "navbar-start is-hidden"}>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link  is-active" href="#">
                        Informacion
        </a>
                    <div className="navbar-dropdown ">
                        <Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/admin-page">Datos Negocio</Link>
                        <Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/servicios-page">Servicios</Link>
                        <Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/carta-page">Carta</Link>
                        <Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/reservas-page">Reservas</Link>
                        <Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/delivery-page">Delivery</Link>
                        <Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/maps-page">Maps</Link>
                        <Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/creditcard-page">Credit Card</Link>
                        <Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/autocomplete-page">Roads</Link>

                        
                        <a className="navbar-item" style={{ width: '100%', marginTop: '10px' }} >Aforo</a>
                        <hr className="navbar-divider">

                        </hr>
                        <div className="navbar-item">
                            <div>
                                <span className="is-size-6-desktop">
                                    <strong className="has-text-info">0.5.1</strong>
                                </span>

                                <small>
                                    <a className="bd-view-all-versions" href="/versions">View all versions</a>
                                </small>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable is-mega">
                    <div className="navbar-link">
                        Blog
        </div>
                    <div id="blogDropdown" className="navbar-dropdown " style={{ width: '60rem' }}>
                        <div className="container is-fluid">
                            <div className="columns">
                                <div className="column">
                                    <h1 className="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                                    <a className="navbar-item" href="/2017/08/03/list-of-tags/">
                                        <div className="navbar-content">
                                            <span>
                                                <small className="has-text-info">03 Aug 2017</small>
                                            </span>
                                            <span>New feature: list of tags</span>
                                        </div>
                                    </a>
                                    <a className="navbar-item" href="/2017/08/03/list-of-tags/">
                                        <div className="navbar-content">
                                            <span>
                                                <small className="has-text-info">03 Aug 2017</small>
                                            </span>
                                            <span>New feature: list of tags</span>
                                        </div>
                                    </a>
                                    <a className="navbar-item" href="/2017/08/03/list-of-tags/">
                                        <div className="navbar-content">
                                            <span>
                                                <small className="has-text-info">03 Aug 2017</small>
                                            </span>
                                            <span>New feature: list of tags</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="column">
                                    <h1 className="title is-6 is-mega-menu-title">Sub Menu Title</h1>
                                    <a className="navbar-item" href="/2017/08/03/list-of-tags/">
                                        <div className="navbar-content">

                                            <span>
                                                <small className="has-text-info">03 Aug 2017</small>
                                            </span>
                                            <span>New feature: list of tags</span>
                                        </div>
                                    </a>
                                    <a className="navbar-item " href="/documentation/overview/start/">
                                        Overview
          </a>
                                    <a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                                        Modifiers
          </a>
                                    <a className="navbar-item " href="http://bulma.io/documentation/columns/basics/">
                                        Columns
          </a>
                                </div>
                                
                                
                            </div>
                        </div>

                        <hr/>


                    </div>
                </div>
            </div>

        );

        return (

            <div>
                <nav className="navbar ">
                    <div className="navbar-brand">
                        <Link to="/" style={{marginTop: 16}}>
                            <img src={"/static/frontend/logoar.svg"} width="300" height="125" />
                        </Link>

                        <div className="navbar-burger burger" data-target="navMenubd-example">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navMenubd-example" className="navbar-menu">

                        {isAuthenticated ? authLinks : ""}
                        {isAuthenticated ? authEnd : guestEnd}
                    </div>
                </nav>



            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,

});

export default connect(mapStateToProps, { logout })(Navbar);
