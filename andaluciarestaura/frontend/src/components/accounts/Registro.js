import React, { Component } from 'react';
import  { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registro, login } from "../../actions/auth";

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
    marginTop: '20%;',
    height: '400px'
}

const colorBlue = {
    color: '#0F1C93'
}

export class Registro extends Component {

    state = {
        cif: "",
        password: "",
        razon_social: "",
        marca_comercial: "",
        tipo_negocio: "",
        tipo_via: "",
        localidad: "",
        provincia: "",
        telefono_1: "",
        email: "",
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticate: PropTypes.bool,
        registro: PropTypes.func.isRequired
    };

    onSubmit = e => {
        window.alert("Gracias por registrarse, en breve nos pondremos en contacto con usted.")
        e.preventDefault();
        this.props.registro(this.state);
    };

    onChange = e => this.setState({ [e.target.name]:e.target.value });


    render() {


        const { cif, password, razon_social, marca_comercial, tipo_negocio, tipo_via, localidad, provincia, telefono_1, email } = this.state;
        const { isAuthenticated, user } = this.props.auth;
        return (
            <React.Fragment>

                <div className="section">
                    <div className="container">
                        <section className="hero is-white has-text-centered " style={less}>
                                            <div className="hero-body">
                                                <div className="container">
                                                    <div className="columns">
                                                        <div className="column is-centered">
                                                            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={colorBlue}>
                                                                Bienvenid@ a Andalucia Restaura
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

                                        <section className="section has-text-centered" style={bkg}>
                                            <h1 className="title" style={{color: 'white'}}>¡Únete a nosotr@s!</h1>
                                        </section>
                                        <section className="section has-text-centered " style={{marginTop: '-250px'}}>
                                            <div className="container ">
                                                <div className="box">
                                                    <div className="content">
                                                        <div className="columns is-centered is-marginless" style={{width: '100%'}}>
                                                            <div className="column is-two-fifths ">
                                                                <section className="hero has-text-centered">
                                <div className="hero-body">
                                    <div className="container ">
                                        <div className="section is-one-third">
                                                <div>
                                                    <form style={{marginTop: '-60px'}}>

                                                        <div className="field">
                                                            <label className="label has-text-centered is-size-4">CIF/NIF Empresa</label>
                                                            <div className="control has-icons-left">
                                                                <input type="text" placeholder="e.g. A58818501" className="input" name="cif" onChange={this.onChange} value={cif} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fas fa-id-card-alt"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label has-text-centered is-size-4">Razon Social</label>
                                                            <div className="control has-icons-left">
                                                                <input type="text" placeholder="Razon Social" name="razon_social" className="input" onChange={this.onChange} value={razon_social} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fa fa-pen-nib"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label has-text-centered is-size-4">Marca Comercial</label>
                                                            <div className="control has-icons-left">
                                                                <input type="text" placeholder="Marca Comercial" name="marca_comercial" className="input" onChange={this.onChange} value={marca_comercial} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fa fa-copyright"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label has-text-centered is-size-4">Tipo de negocio</label>
                                                            <div className="control has-icons-left">
                                                                <input type="text" placeholder="Bar" name="tipo_negocio" className="input" onChange={this.onChange} value={tipo_negocio} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fa fa-utensils"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label has-text-centered is-size-4">Tipo de Via</label>
                                                            <div className="control has-icons-left">
                                                                <input type="text" placeholder="Tipo de via" name="tipo_via" className="input" onChange={this.onChange} value={tipo_via} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fa fa-road"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label has-text-centered is-size-4">Localidad</label>
                                                            <div className="control has-icons-left">
                                                                <input type="text" placeholder="Localidad" name="localidad" className="input" onChange={this.onChange} value={localidad} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fa fa-building"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                       
                                                        <div className="field">
                                                            <label className="label has-text-centered is-size-4">Provincia</label>
                                                            <div className="control has-icons-left">
                                                                <input type="text" placeholder="Provincia" name="provincia" className="input" onChange={this.onChange} value={provincia} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fa fa-map-marked-alt"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label has-text-centered is-size-4">Teléfono de contacto</label>
                                                            <div className="control has-icons-left">
                                                                <input type="text" placeholder="6969696969" name="telefono_1" className="input" onChange={this.onChange} value={telefono_1} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fa fa-phone"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label has-text-centered is-size-4">Correo Electrónico</label>
                                                            <div className="control has-icons-left">
                                                                <input type="email" placeholder="correo@hotehub.com" name="email" className="input" onChange={this.onChange} value={email} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fa fa-envelope"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label has-text-centered is-size-4">Correo Electrónico</label>
                                                            <div className="control has-icons-left">
                                                                <input type="email" placeholder="correo@hotehub.com" name="email" className="input" onChange={this.onChange} value={email} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fa fa-lock"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label className="label has-text-centered is-size-4">Contraseña</label>
                                                            <div className="control has-icons-left">
                                                                <input type="password" placeholder="******" name="password" className="input" onChange={this.onChange} value={password} />
                                                                <span className="icon is-small is-left">
                                                                    <i className="fa fa-lock"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="has-text-centered">
                                                            <button type="submit" className="button" onClick={this.onSubmit} >Registro</button>
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


            </React.Fragment>

        );
    }

}

const mapStateToProps = state => ({
    isAuthenticate: state.auth.isAuthenticate,
    auth: state.auth,
});

export default connect(mapStateToProps, { registro, login })(Registro);
