import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { updateuser, loadUserAdminPage } from '../../actions/auth';
import Files from "react-butterfiles";
import ProgressBar from '../progressbar/ProgressBar'
import PrivateRouteLogin from "../privateroute/PrivateRouteLogin";
import { Redirect, Link } from 'react-router-dom';

const bkg = {
    backgroundPosition: 'center',
    backgroundImage: "url('https://www.dev.andaluciarestaura.com/static/frontend/backLogin.png')",
    backgroundRepeat: 'no-repeat',
    marginTop: '20px',
    backgroundSize: 'cover'
}
const colorWhite = {
    color: 'white'
}

class AdminPage extends Component {

    constructor() {
        super();
        console.log("Cargando pagina v1")
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
            logo: "",
            qr: "",
            guardado: false,
        };
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateuser: PropTypes.func.isRequired,
        loadUserAdminPage: PropTypes.func.isRequired,
        actualUser: PropTypes.array.isRequired,
    };



    onSubmit = e => {
        e.preventDefault();
        const {marca_comercial, nombre_fiscal, razon_social, direccion_fiscal, localidad, codigo_postal, provincia, email, telefono_1, telefono_2, fax, tipo_negocio } = this.state;
        const id = this.props.auth.user.id;
        const cif = this.props.auth.user.cif;
        const user = { id, cif, marca_comercial, nombre_fiscal, razon_social, direccion_fiscal, localidad, codigo_postal, provincia, email, telefono_1, telefono_2, fax, tipo_negocio };

        this.props.updateuser(user);
        console.log("FIN DEL UPDATE USER")
    };



    onChange = e => this.setState({
        [e.target.name]: e.target.value
    },
        console.log([e.target.name],  e.target.value),
    );

    componentDidMount() {
        console.log("Estoy en el component did mount del admin page")
        this.props.loadUserAdminPage(this.props.auth.user.cif);
        this.state.id = this.props.auth.user.id
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
        this.state.logo = this.props.auth.user.logo
        this.state.qr = this.props.auth.user.qr
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    {this.props.actualUser.map(user => (        
                        <div className="section is-paddingless" style={{ marginTop: '40px' }}>
                            <div className="columns">
                                <div className="column is-2"></div>
                                <div className="column is-one-third">
                                    <div>
                                        <h2 className="label is-size-3">DATOS NEGOCIO</h2>
                                    </div>

                                    <div>
                                        <figure className="image is-64x64 is-inline-block">
                                            <img className="is-rounded" src={`/static/clientes/${this.props.auth.user.cif}/logo.jpeg`}></img>
                                        </figure>
                                    </div>

                                </div>
                                <div className="column is-one-third">

                                </div>
                                <div className="column is-one-fifth"></div>
                            </div>


                            <div style={bkg}>
                            <form style={{paddingTop: '70px'}}>
                                <div className="columns">
                                    <div className="column is-2"></div>
                                    <div className="column is-one-third">
                                        <div className="field">
                                            <div className="field-label has-text-left">
                                                <label className="label" style={colorWhite}>CIF/NIF Empresa</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="text" placeholder="" name="cif" value={user.cif} readOnly />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-id-card-alt"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field ">
                                            <div className="field-label has-text-left">
                                                <label className="label" style={colorWhite}>Marca Comercial</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="text" placeholder="" name="marca_comercial" defaultValue={user.marca_comercial} onChange={this.onChange} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-id-card-alt"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field ">
                                            <div className="field-label has-text-left">
                                                <label className="label" style={colorWhite}>Nombre Fiscal</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="text" placeholder="" name="nombre_fiscal" defaultValue={user.nombre_fiscal} onChange={this.onChange} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-id-card-alt"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field ">
                                            <div className="field-label has-text-left">
                                                <label className="label" style={colorWhite}>Razón Social</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">

                                                    <div className="control">
                                                        <div className="select" >
                                                            <select name="razon_social" defaultValue={user.razon_social} onChange={this.onChange} >
                                                                <option value="SL">SL</option>
                                                                <option value="SA">SA</option>
                                                                <option value="Autonomo">Autonomo</option>
                                                                <option value="SCOOP">SCOOP</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field ">
                                            <div className="field-label has-text-left">
                                                <label className="label" style={colorWhite}>Dirección fiscal</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="text" placeholder="" name="direccion_fiscal" defaultValue={user.direccion_fiscal} onChange={this.onChange} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-address-book"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field ">
                                            <div className="field-label has-text-left">
                                                <label className="label" style={colorWhite}>Localidad</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="text" placeholder="" defaultValue={user.localidad} name="localidad" onChange={this.onChange} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-address-book"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field ">
                                            <div className="field-label has-text-left">
                                                <label className="label" style={colorWhite}>Código postal</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="text" placeholder="" defaultValue={user.codigo_postal} name="codigo_postal" onChange={this.onChange} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-address-book"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field ">
                                            <div className="field-label has-text-left">
                                                <label className="label" style={colorWhite}>Provincia</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="text" placeholder="" name="provincia" defaultValue={user.provincia} onChange={this.onChange} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-address-book"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-one-third">
                                        <div className="field ">
                                            <div className="field-label is-normal">
                                                <label className="label has-text-left" style={colorWhite}>Correo Electronico</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="text" placeholder="" name="email" defaultValue={user.email} onChange={this.onChange} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-envelope-square"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field ">
                                            <div className="field-label is-normal">
                                                <label className="label has-text-left" style={colorWhite}>Teléfono 1</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="text" placeholder="" name="telefono_1" defaultValue={user.telefono_1} onChange={this.onChange} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-phone-square-alt"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field ">
                                            <div className="field-label is-normal">
                                                <label className="label has-text-left" style={colorWhite}>Teléfono 2</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="text" placeholder="" name="telefono_2" defaultValue={user.telefono_2} onChange={this.onChange} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-phone-square-alt"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field ">
                                            <div className="field-label is-normal">
                                                <label className="label has-text-left" style={colorWhite}>Eslogan Carta</label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="text" placeholder="" name="fax"  defaultValue={user.fax} onChange={this.onChange} />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-address-book"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile">
                                            <div className="column">
                                                <div className="field ">
                                                    <div className="field-label is-normal">
                                                        <label className="label has-text-left" style={colorWhite}>Descarga tu codigo QR</label>
                                                    </div>
                                                    <div className="field-body">
                                                        <div className="field">
                                                            <a className="button" href={`/static/clientes/${this.props.auth.user.cif}/qr.jpg`} download="QRcode">Descargar</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="column">
                                                <div className="field ">
                                                    <div className="field-label is-normal">
                                                        <label className="label has-text-left" style={colorWhite}>Tipo</label>
                                                    </div>
                                                    <div className="field-body">
                                                        <div className="control">
                                                            <div className="select">
                                                                <select name="tipo_negocio" onChange={this.onChange} defaultValue={user.tipo_negocio}>
                                                                    <option value="Bar">Bar</option>
                                                                    <option value="Restaurante">Restaurante</option>
                                                                    <option value="Hotel">Hotel</option>
                                                                    <option value="Discoteca">Discoteca</option>
                                                                    <option value="Cafeteria">Cafeteria</option>
                                                                    <option value="Catering">Catering</option>
                                                                    <option value="Catering">Churreria</option>
                                                                    <option value="Pub">Pub</option>
                                                                    <option value="Cerveceria">Cerveceria</option>
                                                                    <option value="Heladeria">Heladeria</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                            <figure className="image is-128x128 is-inline-block">
                                                <img className="" src={`/static/clientes/${this.props.auth.user.cif}/qr.jpg`}></img>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="column is-one-fifth"></div>
                                </div>
                            </form>

<<<<<<< HEAD
                            <div className="column is-one-fifth"></div>
                        </div>
                    </form>
                    <br />
                    <div className="field is-horizontal">
                        <div className="field-body">
                            <div className="field">
                                <div className="buttons is-centered">
=======
                            <div className="field is-horizontal" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                                <div className="field-body">
                                    <div className="field">
                                        <div className="buttons is-centered">

                                            {this.props.auth.isUpdating ?
                                                <div>
                                                    <p style={colorWhite}> Guardando sus datos... </p>
                                                    <ProgressBar />
                                                    {this.state.guardado = true}
                                                </div>
>>>>>>> 1ca4943b09928ddd63253d39fbd9ca9c895eed72

                                                :

                                                <div className="has-text-centered">

<<<<<<< HEAD
                                        <div className="has-text-centered">
                                            <Link to="/" refresh="true" className="button" onClick={this.onSubmit} style={{ backgroundColor: '#bca466', color: 'white' }}>Guardar Cambios</Link>
                                        </div>
                                    }
=======
                                                    <button className="button" onClick={this.onSubmit} style={{ backgroundColor: 'white', color: '#bca466' }}>Guardar Cambios</button>
                                                </div>
                                            }
>>>>>>> 1ca4943b09928ddd63253d39fbd9ca9c895eed72

                                            {this.props.auth.updateFailed ? this.state.guardado = false : ""}

                                            {!this.props.auth.isUpdating && !this.props.auth.updateFailed && this.state.guardado ?

<<<<<<< HEAD
                                        <Redirect to="/" refresh="true" />
                                        :
                                        ""
                                    }
=======
                                                <Link to="/" />
                                                :
                                                ""
                                            }
                                        </div>
                                    </div>
>>>>>>> 1ca4943b09928ddd63253d39fbd9ca9c895eed72
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    actualUser: state.auth.userAdminPage
});

export default connect(mapStateToProps, { loadUserAdminPage, updateuser })(AdminPage);
