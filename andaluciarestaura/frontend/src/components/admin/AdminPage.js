import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { updateuser } from '../../actions/auth';
import Files from "react-butterfiles";


class AdminPage extends Component {

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
            logo: "",
            qr: "",
        };
    }
    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateuser: PropTypes.func.isRequired,
    };



    onSubmit = e => {
        e.preventDefault();
        const { id, cif, marca_comercial, nombre_fiscal, razon_social, direccion_fiscal, localidad, codigo_postal, provincia, email, telefono_1, telefono_2, fax, tipo_negocio } = this.state;
        const user = { id, cif, marca_comercial, nombre_fiscal, razon_social, direccion_fiscal, localidad, codigo_postal, provincia, email, telefono_1, telefono_2, fax, tipo_negocio };
        console.log("NOMBRE FISCAL: " + user.nombre_fiscal)
        console.log("USUARIO FINAL: " + user.cif)
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
        console.log("LISTA INICIO: ")
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
        console.log("THIS STATE ID: " + this.state.id)
        console.log("THIS PROPS AUTH USER ID: " + this.props.auth.user.id)
        console.log("THIS STATE LOGO: " + this.state.logo)
        console.log("THIS PROPS AUTH LOGO: " + this.props.auth.user.logo)
        console.log("THIS STATE CIF: " + this.state.cif)
        console.log("THIS PROPS AUTH USER CIF: " + this.props.auth.user.cif)
        console.log("LISTA FIN: ")
    }

    render() {
        const { id = this.props.auth.user.id } = this.state.id
        const { cif = this.props.auth.user.cif } = this.state.cif
        const { marca_comercial = this.props.auth.user.marca_comercial } = this.state.marca_comercial
        const { nombre_fiscal = this.props.auth.user.nombre_fiscal } = this.state.nombre_fiscal
        const { razon_social = this.props.auth.user.razon_social } = this.state.razon_social
        const { direccion_fiscal = this.props.auth.user.direccion_fiscal } = this.state.direccion_fiscal
        const { localidad = this.props.auth.user.localidad } = this.state.localidad
        const { codigo_postal = this.props.auth.user.codigo_postal } = this.state.codigo_postal
        const { provincia = this.props.auth.user.provincia } = this.state.provincia
        const { email = this.props.auth.user.email } = this.state.email
        const { telefono_1 = this.props.auth.user.telefono_1 } = this.state.telefono_1
        const { telefono_2 = this.props.auth.user.telefono_2 } = this.state.telefono_2
        const { fax = this.props.auth.user.fax } = this.state.fax
        const { tipo_negocio = this.props.auth.user.tipo_negocio } = this.state.tipo_negocio
        const { logo } = this.props.auth.user.logo
        const { qr } = this.props.auth.user.qr
        return (
            <React.Fragment>
                ruta
                <div className="section" style={{ marginTop: '40px' }}>
                    <div className="columns">
                        <div className="column is-2"></div>
                        <div className="column is-one-third">
                            <div>
                                <h2 className="label is-size-3">DATOS NEGOCIO</h2>
                            </div>

                            <div>
                                <figure className="image is-64x64 is-inline-block">
                                    <img className="is-rounded" src={`/static/clientes/${cif}/logo.jpeg`}></img>
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
                                                <input className="input" type="text" placeholder="" name="cif" onChange={this.onChange} value={cif} />
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
                                                <input className="input" type="text" placeholder="" name="marca_comercial" onChange={this.onChange} defaultValue={marca_comercial} />
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
                                                <input className="input" type="text" placeholder="" name="nombre_fiscal" onChange={this.onChange} defaultValue={nombre_fiscal} />
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
                                                <div className="select">
                                                    <select name="razon_social" onChange={this.onChange} defaultValue={razon_social}>
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
                                        <label className="label">Dirección fiscal</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control has-icons-left">
                                                <input className="input" type="text" placeholder="" name="direccion_fiscal" onChange={this.onChange} defaultValue={direccion_fiscal} />
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
                                                <input className="input" type="text" placeholder="" name="localidad" onChange={this.onChange} defaultValue={localidad} />
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
                                                <input className="input" type="text" placeholder="" name="codigo_postal" onChange={this.onChange} defaultValue={codigo_postal} />
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
                                                <input className="input" type="text" placeholder="" name="provincia" onChange={this.onChange} defaultValue={provincia} />
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
                                                <input className="input" type="text" placeholder="" name="email" onChange={this.onChange} defaultValue={email} />
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
                                                <input className="input" type="text" placeholder="" name="telefono_1" onChange={this.onChange} defaultValue={telefono_1} />
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
                                                <input className="input" type="text" placeholder="" name="telefono_2" onChange={this.onChange} defaultValue={telefono_2} />
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
                                                <input className="input" type="text" placeholder="" name="fax" onChange={this.onChange} defaultValue={fax} />
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
                                                    <a className="button" href={`/static/clientes/${cif}/qr.jpg`} download="QRcode">Descargar</a>
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
                                                        <select name="tipo_negocio" onChange={this.onChange} defaultValue={tipo_negocio}>
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
                                        <img className="" src={`/static/clientes/${cif}/qr.jpg`}></img>
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

                                    <button className="button" onClick={this.onSubmit} style={{ backgroundColor: '#bca466', color: 'white' }}>Guardar Cambios</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { updateuser })(AdminPage);
