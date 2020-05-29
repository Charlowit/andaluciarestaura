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
                        <span className="control" style={{ marginTop: 7 }}>
                            <img className="is-rounded is-square" src={"/static/frontend/1/logo1.jpeg"} alt="Placeholder image" />
                        </span>
                        <span className="control" style={{ marginTop: 10 }}>
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
                        <Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/maps-page">Maps</Link>
                        <Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/creditcard-page">Credit Card</Link>
                        {/*<Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/autocomplete-page">Roads</Link>*/}


                        
                        <hr className="navbar-divider">

                        </hr>
                        
                    </div>
                </div>
                <div className="navbar-item is-hoverable has-dropdown">
                    <Link className="navbar-link " style={{ width: '100%'}} to="/servicios-page">Servicios</Link>
                </div>
                <div className="navbar-item  is-hoverable has-dropdown">
                    <Link className="navbar-link" style={{ width: '100%'}} to="/carta-page">Carta</Link>
                </div>
                <div className="navbar-item  is-hoverable has-dropdown">
                    <Link className="navbar-link" style={{ width: '100%'}} to="/reservas-page">Reservas</Link>
                </div>
                <div className="navbar-item  is-hoverable  has-dropdown">
                    <Link className="navbar-link" style={{ width: '100%'}} to="/delivery-page">Delivery</Link>
                </div>
                <div className="navbar-item   is-hoverable has-dropdown">
                    <a className="navbar-link" style={{ width: '100%'}} >Aforo</a>
                </div>
            </div>

        );

        return (

            <div>
                <nav className="navbar ">
                    <div className="navbar-brand">
                        <Link to="/" style={{ marginTop: 16 }}>
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
