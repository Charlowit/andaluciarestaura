import React, { Component } from 'react';
import  { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const image = "https://pngimage.net/wp-content/uploads/2018/06/plato-de-comida-png-5.png";
var sectionStyle = {
    backgroundSize: 'cover',
    backgroundImage: "url(" + "https://s3-eu-west-1.amazonaws.com/rentabilibar/media/generica/20190312-iStock_922562780.jpg" + ")"
};

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
    
    onChange = e => this.setState({ [e.target.name]:e.target.value });


    render() {

        const logged = (
            <Redirect to="/admin-page" />
        );
        const notlogged = (
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container">
                        <div className="level">
                            <div className="level-item v-centered is-5-tablet is-4-desktop is-3-widescreen"></div>
                            <div className="level-item is-5-tablet is-4-desktop is-3-widescreen">
                                <div>
                                    <form>
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
                                            <label className="label has-text-centered is-size-4">Password</label>
                                            <div className="control has-icons-left">
                                                <input type="password" placeholder="*******" name="password" className="input" onChange={this.onChange} value={password} />
                                                <span className="icon is-small is-left">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="has-text-centered">
                                            <button type="submit" className="button" onClick={this.onSubmit} >Login</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className="level-item is-pulled-right is-5-tablet is-4-desktop is-3-widescreen">
                                <div className="centered">
                                    <img className="image" src={image} />
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
            <React.Fragment>
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
