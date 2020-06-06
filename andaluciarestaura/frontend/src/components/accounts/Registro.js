import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registro, login, subirpdf } from "../../actions/auth";
import axios from "axios";
import ProgressBar from '../progressbar/ProgressBar'
import PrivateRoute from '../privateroute/PrivateRoute';
import PrivateRouteLogin from "../privateroute/PrivateRouteLogin";


const image = "https://pngimage.net/wp-content/uploads/2018/06/plato-de-comida-png-5.png";
var sectionStyle = {
    backgroundSize: 'cover',
    backgroundImage: "url(" + "https://s3-eu-west-1.amazonaws.com/rentabilibar/media/generica/20190312-iStock_922562780.jpg" + ")"
};

const up = {
    marginTop: '-30%'
};

const less = {
    marginTop: '5%'
}

const bkg = {
    backgroundColor: '#bca466',
    marginTop: '20%'
}

const colorBlue = {
    color: '#0F1C93'
}

export class Registro extends Component {

    state = {
        cif: "",
        marca_comercial: "",
        pdf: null,
        logo: null,
        email: "",
        telefono_1: "",
        password: "",
        submitClick: false,
        terminado: false,
        primeraVez: false,
        otro: false
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticate: PropTypes.bool,
        registro: PropTypes.func.isRequired,
        subirpdf: PropTypes.func.isRequired
    };

    onSubmit = e => {
        //window.alert("Gracias por registrarse, en breve nos pondremos en contacto con usted.")
        //e.preventDefault();
        //console.log(this.state);
        //this.props.registro(this.state);
        //console.log("Registro realizado");
        if (this.state.pdf == null && this.state.logo == null) {
            this.setState({ submitClick: true })
        }

        e.preventDefault();
        let form_data = new FormData();
        form_data.append('cif', this.state.cif);
        form_data.append('marca_comercial', this.state.marca_comercial);
        form_data.append('pdf', this.state.pdf);
        form_data.append('logo', this.state.logo);
        form_data.append('email', this.state.email);
        form_data.append('telefono_1', this.state.telefono_1);
        form_data.append('password', this.state.password);
        this.props.subirpdf(form_data);
        console.log("PDF subido Correctamente");

    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    handlePDFChange = (e) => {
        this.setState({
            pdf: e.target.files[0]
        })
    };
    handleLogoChange = (e) => {
        this.setState({
            logo: e.target.files[0]
        })
    };

    render() {

        const { cif, password, marca_comercial, telefono_1, email } = this.state;
        const { isAuthenticated, user, isRegistering, registerFailed } = this.props.auth;

        const unlogged = (
            <div className="section">
                <div className="container">
                    <section className="hero is-white has-text-centered " style={less}>
                        <div className="hero-body">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-centered">
                                        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={colorBlue}>
                                            Bienvenid@ a Córdoba Restaura
                                                    </h1>
                                        <h2 className="subtitle is-size-4-desktop" style={colorBlue}>
                                            Algo revolucionario va a pasar en tu negocio a partir de este momento.
                                                    </h2>
                                        <figure className="image is-inline-block">
                                            <img className="is-rounded"
                                                src="https://pngimage.net/wp-content/uploads/2018/06/plato-de-comida-png-5.png" style={less}></img>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section has-text-centered " style={{ marginTop: '-150px' }}>

                        <div className="container">
                            <div className="box" style={bkg}>
                                <h1 className="title" style={{ color: 'white', marginTop: '2%' }}>¡Únete a nosotr@s!</h1>
                                <div className="content">
                                    <div className="columns is-centered is-marginless" style={{ width: '100%' }}>
                                        <div className="column is-one-third-desktop is-half-widescreen is-half-tablet is-full-mobile">
                                            <section className="hero has-text-centered">
                                                <div className="hero-body">
                                                    <div className="container ">
                                                        <div className="section">
                                                            <div>
                                                                <form style={{ marginTop: '-60px' }}>

                                                                    <div className="field">
                                                                        <label className="label has-text-centered is-size-4">CIF/NIF Empresa</label>
                                                                        <div className="control has-icons-left">
                                                                            <input type="text" placeholder="e.g. A58818501" className="input" name="cif" onChange={this.onChange} value={cif} required />
                                                                            <span className="icon is-small is-left">
                                                                                <i className="fas fa-id-card-alt"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="field">
                                                                        <label className="label has-text-centered is-size-4">Marca Comercial</label>
                                                                        <div className="control has-icons-left">
                                                                            <input type="text" placeholder="Marca Comercial" name="marca_comercial" className="input" onChange={this.onChange} value={marca_comercial} required />
                                                                            <span className="icon is-small is-left">
                                                                                <i className="fa fa-copyright"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="field ">
                                                                        <label className="label  is-size-4">Adjunta tu carta en pdf</label>

                                                                        <div className="file has-name">
                                                                            <label className="file-label">
                                                                                <input className="file-input" type="file" id="pdf" accept="application/pdf" onChange={this.handlePDFChange} required />
                                                                                <span className="file-cta">
                                                                                    <span className="file-icon">
                                                                                        <i className="fas fa-upload"></i>
                                                                                    </span>
                                                                                    <span className="file-label">
                                                                                        Escoja su carta...
                                                                                    </span>
                                                                                </span>


                                                                                {this.state.submitClick ?
                                                                                    <span className="file-name" style={{ background: 'red' }}>
                                                                                        {this.state.pdf ? this.state.pdf.name : 'Ninguna carta seleccionada'}
                                                                                    </span>
                                                                                    :

                                                                                    <span className="file-name" style={{ background: 'white' }}>
                                                                                        {this.state.pdf ? this.state.pdf.name : 'Ninguna carta seleccionada'}
                                                                                    </span>}

                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="field">
                                                                        <label className="label has-text-centered is-size-4">Adjunta el logo de tu negocio</label>

                                                                        <div className="file has-name">
                                                                            <label className="file-label">
                                                                                <input className="file-input" type="file" id="logo" accept=".jpeg" onChange={this.handleLogoChange} required />
                                                                                <span className="file-cta">
                                                                                    <span className="file-icon">
                                                                                        <i className="fas fa-upload"></i>
                                                                                    </span>
                                                                                    <span className="file-label">
                                                                                        Escoge el logo…
                                                                                    </span>
                                                                                </span>
                                                                                {this.state.submitClick ?
                                                                                    <span className="file-name" style={{ background: 'red' }}>
                                                                                        {this.state.logo ? this.state.logo.name : 'Ningún logo seleccionado'}
                                                                                    </span>
                                                                                    :
                                                                                    <span className="file-name" style={{ background: 'white' }}>
                                                                                        {this.state.logo ? this.state.logo.name : 'Ningún logo seleccionado'}
                                                                                    </span>}

                                                                            </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="field">
                                                                        <label className="label has-text-centered is-size-4">Correo Electrónico</label>
                                                                        <div className="control has-icons-left">
                                                                            <input type="email" placeholder="correo@hotehub.com" name="email" className="input" onChange={this.onChange} value={email} required />
                                                                            <span className="icon is-small is-left">
                                                                                <i className="fa fa-envelope"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="field">
                                                                        <label className="label has-text-centered is-size-4">Teléfono de contacto</label>
                                                                        <div className="control has-icons-left">
                                                                            <input type="text" placeholder="6969696969" name="telefono_1" className="input" onChange={this.onChange} value={telefono_1} required />
                                                                            <span className="icon is-small is-left">
                                                                                <i className="fa fa-phone"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="field">
                                                                        <label className="label has-text-centered is-size-4">Contraseña</label>
                                                                        <div className="control has-icons-left">
                                                                            <input type="password" placeholder="******" name="password" className="input" onChange={this.onChange} value={password} required />
                                                                            <span className="icon is-small is-left">
                                                                                <i className="fa fa-lock"></i>

                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                    <div style={{ marginTop: '60px' }}>
                                                                        {isRegistering ?
                                                                            <div>
                                                                                <p > Registrando y creando su carta digital </p>
                                                                                <ProgressBar />
                                                                                {registerFailed ? this.state.terminado = false : this.state.terminado = true}
                                                                            
                                                                            </div>
                                                                            
                                                                            :
                                                                        
                                                                                <div className="has-text-centered">
                                                                                    {registerFailed ? this.state.terminado = false : ""}
                                                                                    {registerFailed ? this.state.primeraVez = false : ""}
                                                                                    {this.state.terminado ? this.state.primeraVez = true : ""}
                                                                                    <button type="submit" className="button" onClick={this.onSubmit} >Registro</button>
                                                                                </div>
                                                                            }

                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        );

        const logged = (
            <div >
                {this.state.primeraVez && this.state.terminado && !isRegistering && !registerFailed ?
                    <PrivateRouteLogin to="/" />
                    :
                    ""
                }
            </div>
        );

        const adminPage = (
            <div >
                
                    <PrivateRouteLogin to="/admin-page" />
               
            </div>
        );

        return (
            <React.Fragment>
               {!isAuthenticated  ? !registerFailed && this.state.primeraVez ? logged : unlogged : adminPage} 
            </React.Fragment>

        );
    }

}

const mapStateToProps = state => ({
    isAuthenticate: state.auth.isAuthenticate,
    auth: state.auth,
});

export default connect(mapStateToProps, { registro, login, subirpdf })(Registro);
