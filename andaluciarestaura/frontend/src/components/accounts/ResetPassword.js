import React, { Component } from 'react';
import { connect } from "react-redux";
import { cambiarpassword } from "../../actions/auth";
import PropTypes from "prop-types";

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
    backgroundPosition: 'center',
    backgroundImage: "url('https://www.dev.andaluciarestaura.com/static/frontend/backLogin.png')",
    backgroundRepeat: 'no-repeat',
    marginTop: '20px',
    backgroundSize: 'cover'
}

const colorBlue = {
    color: '#0F1C93'
}

const colorWhite = {
    color: 'white'
}

export class ResetPassword extends Component {

    constructor(props) {
        super(props);
        console.log("Cargando pagina v1")
        this.state = {
            email: "",
            password: "",
            password2: "",
            passwordvacio: false,
            password2vacio: false,
            passwordnocoincide: false,
        }
    }

    static propTypes = {
        usuario: PropTypes.array.isRequired,
    }

    onSubmit = e => {
        console.log("ESTOY EN EL ONSUBMIT")
        e.preventDefault();
        console.log("ESTE ES AUTH EMAIL --> ", this.props.usuario[0])
        const cif = this.props.usuario[0].cif;
        const password = this.state.password;
        if (this.state.password == "") {
            this.setState({ passwordvacio: true })
        } else {
            this.setState({ passwordvacio: false })
        }

        if (this.state.password2 == "") {
            this.setState({ password2vacio: true })
        } else {
            this.setState({ password2vacio: false })
        }

        if (this.state.password == this.state.password2) {
            const user = { cif, password }
            this.props.cambiarpassword(user)
        }
        else {
            this.setState({ passwordvacio: true })
            this.setState({ password2vacio: true })
            this.setState({passwordnocoincide: true})
        }

    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {

        return (
            <React.Fragment>
                <div className="section is-paddingless">
                    <section className="hero has-text-centered is-paddingless">
                        <div className="hero-body is-paddingless" style={bkg}>
                            <div className="content" style={{ marginTop: '70px' }}>
                                <h1 className="title" style={colorWhite}>¿Necesita cambiar su contraseña?</h1>
                                <h1 className="subtitle" style={colorWhite}>No olvide rellenar todos los campos.</h1>
                                <div className="columns is-centered is-marginless" style={{ width: '100%' }}>
                                    <div className="column is-one-third is-half-tablet is-full-mobile">
                                        <section className="hero has-text-centered">
                                            <div className="hero-body is-paddingless">
                                                <div className="container ">
                                                    <div className="section ">
                                                        <div>
                                                            <form style={{ marginTop: '-60px' }}>

                                                                <div className="field">
                                                                    <label className="label has-text-centered is-size-4"
                                                                        style={colorWhite}>Contraseña</label>
                                                                    {this.state.passwordvacio ?
                                                                        <div>
                                                                            <div className="control has-icons-left">
                                                                                <input type="password"
                                                                                    placeholder="******"
                                                                                    name="password"
                                                                                    className="input is-danger"
                                                                                    onChange={this.onChange}
                                                                                    value={this.state.password} required />
                                                                                <span className="icon is-small is-left">
                                                                                    <i className="fa fa-lock"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                            :
                                                                       <div>
                                                                            <div className="control has-icons-left">
                                                                                <input type="password"
                                                                                    placeholder="******"
                                                                                    name="password"
                                                                                    className="input"
                                                                                    onChange={this.onChange}
                                                                                    value={this.state.password} required />
                                                                                <span className="icon is-small is-left">
                                                                                    <i className="fa fa-lock"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    }

                                                                </div>
                                                                <div className="field">
                                                                    <label className="label has-text-centered is-size-4"
                                                                        style={colorWhite}>Repita contraseña</label>
                                                                    {this.state.password2vacio ?
                                                                        <div>
                                                                            <div className="control has-icons-left">
                                                                                <input type="password"
                                                                                    placeholder="******"
                                                                                    name="password2"
                                                                                    className="input is-danger"
                                                                                    onChange={this.onChange}
                                                                                    value={this.state.password2} required />
                                                                                <span className="icon is-small is-left">
                                                                                    <i className="fa fa-lock"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        <div>
                                                                            <div className="control has-icons-left">
                                                                                <input type="password"
                                                                                    placeholder="******"
                                                                                    name="password2"
                                                                                    className="input"
                                                                                    onChange={this.onChange}
                                                                                    value={this.state.password2} required />
                                                                                <span className="icon is-small is-left">
                                                                                    <i className="fa fa-lock"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                                {this.state.passwordnocoincide ?
                                                                    <p className="is-danger"> Las contraseñas no coinciden</p>
                                                                    : 
                                                                    <p>""</p>
                                                                }
                                                                <div style={{ marginTop: '60px' }}>
                                                                    <button type="submit" className="button"
                                                                        onClick={this.onSubmit}
                                                                        style={{ color: '#bca466' }}>Cambiar contraseña
                                                                    </button>
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
                    </section>
                </div>
            </React.Fragment>

        );
    }

}

const mapStateToProps = state => ({
    usuario: state.auth.userAdminPage,
});

export default connect(mapStateToProps, { cambiarpassword })(ResetPassword);
