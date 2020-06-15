import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logout } from '../../actions/auth';
import BarraInformacion from '../barrainformacion/BarraInformacion'

class Navbar extends Component {

    constructor() {
      super();
      this.state = {
        id: "",
        cif: "",
        marca_comercial: "",
        nombre_fiscal: "",
        razon_social: "",
        direccion_fiscal: "",
        localidad: "",
        codigo_postal: "",
        provincia: "",
        email: "",
        telefono_1: "",
        telefono_2: "",
        fax: "",
        tipo_negocio: "",
      };
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    };

    componentDidMount() {
        console.log(this.props.auth.user)
        console.log("LISTA INICIO: ")
       /*this.state.id = this.props.auth.user.id
        this.state.cif = this.props.auth.user.cif

        this.state.marca_comercial = this.props.auth.user.marca_comercial
        this.state.nombre_fiscal = this.props.auth.user.nombre_fiscal
        this.state.razon_social = this.props.auth.user.razon_social
        this.state.direccion_fiscal = this.props.auth.user.direccion_fiscal
        this.state.localidad = this.props.auth.user.localidad
        this.state.codigo_postal = this.props.auth.user.codigo_postal
        this.state.provincia = this.props.auth.user.provincia
        this.state.email = this.props.auth.user.email
        this.state.telefono_1 = this.props.auth.user.telefono_1
        this.state.telefono_2 = this.props.auth.user.telefono_2
        this.state.fax = this.props.auth.user.fax
        this.state.tipo_negocio = this.props.auth.user.tipo_negocio
        console.log("THIS STATE ID: " + this.state.id)
        console.log("THIS PROPS AUTH USER ID: " + this.props.auth.user.id)
        console.log("THIS STATE CIF: " + this.state.cif)
        console.log("THIS PROPS AUTH USER CIF: " + this.props.auth.user.cif)
        console.log("LISTA FIN: ")*/
    }

    render(){


        /*const { id=this.props.auth.user.id } = this.state.id
        if (this.props.auth.user.cif == null){
            const { cif=this.props.auth.user.cif} = this.state.cif
        }
        const { marca_comercial=this.props.auth.user.marca_comercial} = this.state.marca_comercial
        const { nombre_fiscal=this.props.auth.user.nombre_fiscal} = this.state.nombre_fiscal
        const { razon_social=this.props.auth.user.razon_social} = this.state.razon_social
        const { direccion_fiscal=this.props.auth.user.direccion_fiscal} = this.state.direccion_fiscal
        const { localidad=this.props.auth.user.localidad} = this.state.localidad
        const { codigo_postal=this.props.auth.user.codigo_postal} = this.state.codigo_postal
        const { provincia=this.props.auth.user.provincia} = this.state.provincia
        const { email=this.props.auth.user.email} = this.state.email
        const { telefono_1=this.props.auth.user.telefono_1} = this.state.telefono_1
        const { telefono_2=this.props.auth.user.telefono_2} = this.state.telefono_2
        const { fax=this.props.auth.user.fax} = this.state.fax
        const { tipo_negocio=this.props.auth.user.tipo_negocio} = this.state.tipo_negocio*/
        const { isAuthenticated, user } = this.props.auth;
        const authEnd = (

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        {/*
                        <span className="control" style={{ marginTop: 7 }}>
                            <img className="is-rounded is-square" src={"/static/frontend/1/logo1.jpeg"} alt="Placeholder image" />
                        </span>
                        */}
                        <span className="control" style={{ marginTop: 14 }}>
                            <div className="media-content">
                                <p className="subtitle is-6">{user ? `Bienvenido ${user.cif}` : ""} </p>
                            </div>
                        </span>
                        <span className="control">
                            <div className="buttons">
                                <Link to="/" refresh="true" className="button is-danger" style={{backgroundColor:'#bca466'}} onClick={this.props.logout}>Logout</Link>
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
                                <p className="button is-link" style={{ width: '100%', backgroundColor:'#bca466' }}>Registro</p>
                            </Link>
                        </span>
                        <span className="control">
                            <Link to="/">
                                <p className="button is-link" style={{ width: '100%', backgroundColor:'#bca466' }}>Login</p>
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
                        {/*<Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/maps-page">Maps</Link>*/}
                        <Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/creditcard-page">Tárjeta de crédito</Link>
                        {/*<Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/autocomplete-page">Roads</Link>*/}
                        {/*<Link className="navbar-item" style={{ width: '100%', marginTop: '10px' }} to="/avatar-page">Avatar</Link>*/}


                        
                        <hr className="navbar-divider">

                        </hr>
                        
                    </div>
                </div>

                <div className="navbar-item is-hoverable has-dropdown">
                    <Link className="navbar-link " style={{ width: '100%'}} to="/servicios-page">Servicios</Link>
                </div>
                <div className="navbar-item  is-hoverable has-dropdown">
                    <Link className="navbar-link" style={{ width: '100%'}} to="/visualizar">Cartas</Link>
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
                <nav className="navbar is-fixed-top">
                    <div className="navbar-brand">
                        <Link to="/" style={{ marginTop: '9px' }}>
                            <img src={"/static/frontend/logoar.png"} width="300" height="125" />
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

                <BarraInformacion />


            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,

});

export default connect(mapStateToProps, { logout })(Navbar);
