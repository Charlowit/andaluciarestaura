import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import BarraInformacion from '../barrainformacion/BarraInformacion'


const image = "https://pngimage.net/wp-content/uploads/2018/06/plato-de-comida-png-5.png";
var sectionStyle = {
    backgroundSize: 'cover',
    backgroundImage: "url(" + "https://s3-eu-west-1.amazonaws.com/rentabilibar/media/generica/20190312-iStock_922562780.jpg" + ")"
};

const colorBlue = {
    color: '#0F1C93'
}

const bkg = {
    marginBottom: '6%',
    backgroundPosition: 'center',
    backgroundImage: "url('https://www.dev.andaluciarestaura.com/static/frontend/backLogin.png')",
    backgroundRepeat: 'no-repeat',
    marginTop: '0px',
    backgroundSize: 'cover'

}

const colorWhite = {
    color: 'white'
}

export class Login extends Component {

    state = {
        cif: "",
        password: "",
        cifVacio: false,
        passVacia: false,
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticate: PropTypes.bool
    };

    onSubmit = e => {
        console.log("");
        e.preventDefault();

        if (this.state.cif == "") {
            this.setState({ cifVacio: true })
        } else {
            this.setState({ cifVacio: false })
        }

        if (this.state.password == "") {
            this.setState({ passVacia: true })
        } else {
            this.setState({ passVacia: false })
        }

        if (this.state.cif != "" && this.state.password != "") {
            this.props.login(this.state.cif, this.state.password);
        }
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {

        const logged = (
            <Redirect to="/admin-page" />
        );
        const notlogged = (
            <div style={{ marginTop: '-35px' }}>
                
                <section className="hero" style={{ marginBottom: "-30px" }} >

                    <div className="has-text-centered" style={{ paddingTop: '150px' }}>
                        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={colorBlue}>
                            Bienvenid@ a Córdoba Restaura
                                                    </h1>
                        <h2 className="subtitle is-size-4-desktop" style={colorBlue}>
                            Algo revolucionario va a pasar en tu negocio a partir de este momento.
                                                    </h2>

                    </div>
                    <div className="has-text-centered">
                        <img src={"https://www.dev.andaluciarestaura.com/static/frontend/image004.png"} width="400" height="175" style={{ marginTop: '80px' }} />

                    </div>

                    <div className="hero-body" style={bkg}>

                        <div className="container" width="100%" >
                            <div className="columns is-centered"   >


                                <div className="column is-one-quarter has-text-centered">

                                    <div className="section" >
                                        <form style={{ marginTop: '10%' }}>
                                            <div className="field">
                                                <label className="label has-text-centered is-size-4" style={colorWhite}>CIF/NIF Empresa</label>
                                                <div className="control has-icons-left">
                                                    <input type="text" placeholder="e.g. A58818501" className="input" name="cif" onChange={this.onChange} required />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-id-card-alt"></i>
                                                    </span>
                                                </div>
                                                {this.state.cifVacio ?

                                                    <p className="help is-danger" style={{ fontSize: '15px' }}>El campo CIF/NIF Empresa está vacío</p>
                                                    :
                                                    ""
                                                }
                                            </div>
                                            <div className="field">
                                                <label className="label has-text-centered is-size-4" style={colorWhite}>Password</label>
                                                <div className="control has-icons-left">
                                                    <input type="password" placeholder="*******" name="password" className="input" onChange={this.onChange} required />
                                                    <span className="icon is-small is-left">
                                                        <i className="fa fa-lock"></i>
                                                    </span>
                                                </div>
                                                {this.state.passVacia ?

                                                    <p className="help is-danger" style={{ fontSize: '15px' }}>El campo Password está vacío</p>
                                                    :
                                                    ""
                                                }
                                            </div>
                                            <div className="has-text-centered">
                                                {this.props.auth.isLoading ?
                                                    <button type="submit is-outlined" className="button is-loading" style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} ></button>

                                                    :
                                                    <button type="submit is-outlined" className="button" style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.onSubmit} >Login</button>
                                                }

                                                <Link className="button is-outlined" to="/register-page" style={{ backgroundColor: 'white', color: '#bca466', marginLeft: '5px' }}>
                                                    Registro
                                            </Link>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                                <div className="column is-one-quarter has-text-centered" style={{ marginTop: '30px' }}>
                                    <div className="centered">
                                        <img className="is-centered" src={image} />
                                        <p className="has-text-centered" style={colorWhite}>Tapa de Diseño ofrecida by Bar Los Cármenes</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
        const { cif, password } = this.state;
        const { isAuthenticated, user } = this.props.auth;

        return (
            <React.Fragment >
                {isAuthenticated ? logged : notlogged}
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => ({
    isAuthenticate: state.auth.isAuthenticate,
    auth: state.auth
});

export default connect(mapStateToProps, { login })(Login);