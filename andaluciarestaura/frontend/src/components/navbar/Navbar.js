import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logout } from '../../actions/auth';
import { bubble as Menu } from 'react-burger-menu'
var styles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '30px',
        height: '24px',
        right: '30px',
        top: '10px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24x'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {     
        height: '100%'
    },
    bmMenu: {
        background: '#f4f4f4',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#f4f4f4'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

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




            <Menu right styles={styles}>
                <Link className="menu-item button is-link" style={{ width: '100%', marginTop: '10px' }} to="/admin-page">Datos Negocio</Link>
                <Link className="menu-item button is-link" style={{ width: '100%', marginTop: '10px' }} to="/servicios-page">Servicios</Link>
                <Link className="menu-item button is-link" style={{ width: '100%', marginTop: '10px' }} to="/carta-page">Carta</Link>
                <Link className="menu-item button is-link" style={{ width: '100%', marginTop: '10px' }} to="/reservas-page">Reservas</Link>
                <Link className="menu-item button is-link" style={{ width: '100%', marginTop: '10px' }} to="/delivery-page">Delivery</Link>
                <a className="menu-item button is-link" style={{ width: '100%', marginTop: '10px' }} >Aforo</a>

                <div className="menu-item" style={{ width: '100%' }}>
                    <div style={{ width: '100%', marginTop: '10px'}}>
                        <img className="is-rounded is-square" src={"/static/frontend/1/logo1.jpeg"} alt="Placeholder image" />
                    </div>
                    <div style={{ width: '100%', marginTop: '20px'}}>
                        <div className="media-content">
                            <p className="subtitle is-6">{user ? `Bienvenido ${user.cif}` : ""}</p>
                        </div>
                    </div>
                    <div style={{ width: '100%', marginTop: '20px'}}>
                        <div className="buttons">
                            <Link to="/" className="button is-danger" onClick={this.props.logout}>Logout</Link>
                        </div>
                    </div>
                </div>
            </Menu>


        );

        const guestLinks = (
            <div>
                
                <Menu right styles={styles}>

                    <div className="menu-item" style={{ width: '100%' }}>
                        <Link to="/register-page">
                            <p className="button is-link" style={{ width: '100%' }}>Registro</p>
                        </Link>
                    </div>
                    <div className="menu-item" style={{ width: '100%', marginTop: '10px' }}>
                        <Link to="/">
                            <p className="button is-link" style={{ width: '100%' }}>Login</p>
                        </Link>
                    </div>

                </Menu>
            </div>
        );

        return (
            <React.Fragment>
                <header>   
                    {isAuthenticated ? authLinks : guestLinks}
                    <div className="navbar-brand is-inline" >
                        <p className="navbar-item" href="#">
                            <Link to="/">
                                <img src={"/static/frontend/logoar.svg"} width="300" height="125" />
                            </Link>
                        </p>
                    </div>

                </header>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,

});

export default connect(mapStateToProps, { logout })(Navbar);
