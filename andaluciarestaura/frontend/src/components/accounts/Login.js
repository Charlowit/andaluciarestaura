import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const image = "https://pngimage.net/wp-content/uploads/2018/06/plato-de-comida-png-5.png";
var sectionStyle = {
    backgroundSize: 'cover',
    backgroundImage: "url(" + "https://s3-eu-west-1.amazonaws.com/rentabilibar/media/generica/20190312-iStock_922562780.jpg" + ")"
};

const colorBlue = {
    color: '#0F1C93'
}

export class Login extends Component {

    state = {
        cif: "",
        password: "",

    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticate: PropTypes.bool
    };

    onSubmit = e => {
        console.log("");
        e.preventDefault();
        this.props.login(this.state.cif, this.state.password);
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {

        const logged = (
            <Redirect to="/admin-page" />
        );
        const notlogged = (
            <section className="hero is-medium" >


                <div className="hero-body">
                    <div className="has-text-centered" style={{paddingTop: '30px'}}>
                        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={colorBlue}>
                            Bienvenid@ a Córdoba Restaura
                                                    </h1>
                        <h2 className="subtitle is-size-4-desktop" style={colorBlue}>
                            Algo revolucionario va a pasar en tu negocio a partir de este momento.
                                                    </h2>

                    </div>
                    <div className="container" style={{marginTop: '10%'}}>
                        <div className="columns is-centered" style={{ marginLeft: '-10%' }}>


                            <div className="column is-one-quarter has-text-centered" style={{ marginLeft: '10%', marginBottom: '6%' }}>

                                <div>
                                    <form style={{ marginTop: '10%' }}>
                                        <div className="field">
                                            <label className="label has-text-centered is-size-4">CIF/NIF Empresa</label>
                                            <div className="control has-icons-left">
                                                <input type="text" placeholder="e.g. A58818501" className="input" name="cif" onChange={this.onChange} required />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-id-card-alt"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label has-text-centered is-size-4">Password</label>
                                            <div className="control has-icons-left">
                                                <input type="password" placeholder="*******" name="password" className="input" onChange={this.onChange} required />
                                                <span className="icon is-small is-left">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="has-text-centered">
                                            <button type="submit is-outlined" className="button" style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.onSubmit} >Login</button>
                                            <Link className="button is-outlined" to="/register-page" style={{ backgroundColor: 'white', color: '#bca466', marginLeft: '5px' }}>
                                                Registro
                                            </Link>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className="column is-one-quarter has-text-centered" style={{ marginLeft: '10%' }}>
                                <div className="centered">
                                    <img className="is-centered" src={image} />
                                    <p className="has-text-centered">Tapa de Diseño ofrecida by Bar Los Cármenes</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
