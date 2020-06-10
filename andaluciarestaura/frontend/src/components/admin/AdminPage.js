import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { updateuser, loadUserAdminPage } from '../../actions/auth';
import Files from "react-butterfiles";
import ProgressBar from '../progressbar/ProgressBar'
import PrivateRouteLogin from "../privateroute/PrivateRouteLogin";
import { Redirect, Link } from 'react-router-dom';


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
        console.log("TIPO NEGOCIO: " + e.target.value),
        console.log("CIF:" + this.state.cif),
        console.log("MARCA_COMERCIAL: " + this.state.marca_comercial)
    );

    componentDidMount() {
        console.log("Estoy en el component did mount del admin page")
        this.props.loadUserAdminPage(this.props.auth.user.cif);

    }

    render() {
        console.log("Antes del return ")
        return (
            <React.Fragment>
                <div>
                    {this.props.actualUser.map(user => (
                        
                        <div className="section" style={{ marginTop: '40px' }}>
<div className="is-hidden">
                            {this.state.marca_comercial = user.marca_comercial}
                            {this.state.nombre_fiscal = user.nombre_fiscal}
                            {this.state.razon_social = user.razon_social}
                            {this.state.direccion_fiscal = user.direccion_fiscal}
                            {this.state.localidad = user.localidad}
                            {this.state.codigo_postal = user.codigo_postal}
                            {this.state.provincia = user.provincia}
                            {this.state.email = user.email}
                            {this.state.telefono_1 = user.telefono_1}
                            {this.state.telefono_2 = user.telefono_2}
                            {this.state.fax = user.fax}
                            {this.state.tipo_negocio = user.tipo_negocio}
                        </div>
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
                            <hr />



                            <form>
                                <div className="columns">
                                    <div className="column is-2"></div>
                                    <div className="column is-one-third">
                                        <div className="field">
                                            <div className="field-label has-text-left">
                                                <label className="label">CIF/NIF Empresa</label>
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
                                                <label className="label">Marca Comercial</label>
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
                                                <label className="label">Nombre Fiscal</label>
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
                                                <label className="label">Razón Social</label>
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
                                                <label className="label" >Dirección fiscal</label>
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
                                                <label className="label">Localidad</label>
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
                                                <label className="label">Código postal</label>
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
                                                <label className="label">Provincia</label>
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
                                                <label className="label has-text-left">Correo Electronico</label>
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
                                                <label className="label has-text-left">Teléfono 1</label>
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
                                                <label className="label has-text-left">Teléfono 2</label>
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
                                                <label className="label has-text-left">Eslogan Carta</label>
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
                                                        <label className="label has-text-left">Descarga tu codigo QR</label>
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
                                                        <label className="label has-text-left">Tipo</label>
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

                            <br />
                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <div className="buttons is-centered">

                                            {this.props.auth.isUpdating ?
                                                <div>
                                                    <p > Guardando sus datos... </p>
                                                    <ProgressBar />
                                                    {this.state.guardado = true}
                                                </div>

                                                :

                                                <div className="has-text-centered">

                                                    <button className="button" onClick={this.onSubmit} style={{ backgroundColor: '#bca466', color: 'white' }}>Guardar Cambios</button>
                                                </div>
                                            }

                                            {this.props.auth.updateFailed ? this.state.guardado = false : ""}

                                            {!this.props.auth.isUpdating && !this.props.auth.updateFailed && this.state.guardado ?

                                                <Link to="/" refresh="true" />
                                                :
                                                ""
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
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
