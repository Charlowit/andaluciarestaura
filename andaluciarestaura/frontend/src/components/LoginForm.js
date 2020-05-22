import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
const image = "https://pngimage.net/wp-content/uploads/2018/06/plato-de-comida-png-5.png";
var sectionStyle = {
    backgroundSize: 'cover',
    backgroundImage: "url(" + "https://s3-eu-west-1.amazonaws.com/rentabilibar/media/generica/20190312-iStock_922562780.jpg" + ")"
};
class LoginForm extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="hero is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <div className="level">
                                <div className="level-item v-centered is-5-tablet is-4-desktop is-3-widescreen"></div>
                                <div className="level-item is-5-tablet is-4-desktop is-3-widescreen">
                                    <div>
                                        <form action="">
                                            <div className="field">
                                                <label for="" className="label has-text-centered is-size-4">CIF/NIF Empresa</label>
                                                <div className="control has-icons-left">
                                                    <input type="user" placeholder="e.g. A58818501" className="input" required />
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-id-card-alt"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label for="" className="label has-text-centered is-size-4">Password</label>
                                                <div className="control has-icons-left">
                                                    <input type="password" placeholder="*******" name="password" className="input" required />
                                                    <span className="icon is-small is-left">
                                                        <i className="fa fa-lock"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="has-text-centered">
                                                <div className="field">
                                                    <label for="" className="checkbox">
                                                        <p><input type="checkbox" />  Recuérdame  <a>¿Has olvidado tu contraseña?</a></p>
                                                    </label>
                                                </div>
                                                <NavLink to="/admin-page">
                                                    <p className="button">Login</p>
                                                </NavLink>
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
            </React.Fragment>
        );
    }
}


export default LoginForm;
