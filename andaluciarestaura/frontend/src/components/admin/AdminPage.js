import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { updateuser } from '../../actions/datosusuario';
import Files from "react-butterfiles";


class AdminPage extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateuser: PropTypes.func.isRequired,
    };


    onSubmit = e => {
        e.preventDefault();
        const { cif, marca_comercial, nombre_fiscal, razon_social, direccion_fiscal, localidad, codigo_postal, provincia, email, telefono_1, telefono_2, fax, iban, tipo_negocio } = this.state;
        const user = { cif, marca_comercial, nombre_fiscal, razon_social, direccion_fiscal, localidad, codigo_postal, provincia, email, telefono_1, telefono_2, fax, iban, tipo_negocio };
        this.props.updateuser();
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { isAuthenticated, user } = this.props.auth;

        return (
            //Esto envuelve lo que queramos devolver
            //Aqui estamos diciendo que el provider recoja de store
            <React.Fragment>

                <div className="section">
                    <div className="columns">
                        <div className="column is-2"></div>
                        <div className="column is-one-third">
                            <h2 className="label is-size-3">DATOS NEGOCIO</h2>
                        </div>
                        <div className="column is-one-third"></div>
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
                                                <input className="input" type="text" placeholder="" name="cif" onChange={this.onChange} defaultValue={user ? `${user.cif}` : ""} />
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
                                                <input className="input" type="text" placeholder="" name="marca_comercial" onChange={this.onChange} defaultValue={user ? `${user.marca_comercial}` : ""} />
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
                                                <input className="input" type="text" placeholder="" name="nombre_fiscal" onChange={this.onChange} defaultValue={user ? `${user.nombre_fiscal}` : ""} />
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
                                            <p className="control has-icons-left">
                                                <input className="input" type="text" placeholder="" name="razon_social" onChange={this.onChange} defaultValue={user ? `${user.razon_social}` : ""} />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-id-card-alt"></i>
                                                </span>
                                            </p>
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
                                                <input className="input" type="text" placeholder="" name="direccion_fiscal" onChange={this.onChange} defaultValue={user ? `${user.direccion_fiscal}` : ""} />
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
                                                <input className="input" type="text" placeholder="" name="localidad" onChange={this.onChange} defaultValue={user ? `${user.localidad}` : ""} />
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
                                                <input className="input" type="text" placeholder="" name="codigo_postal" onChange={this.onChange} defaultValue={user ? `${user.codigo_postal}` : ""} />
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
                                                <input className="input" type="text" placeholder="" name="provincia" onChange={this.onChange} defaultValue={user ? `${user.provincia}` : ""} />
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
                                                <input className="input" type="text" placeholder="" name="email" onChange={this.onChange} defaultValue={user ? `${user.email}` : ""} />
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
                                                <input className="input" type="text" placeholder="" name="telefono_1" onChange={this.onChange} defaultValue={user ? `${user.telefono_1}` : ""} />
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
                                                <input className="input" type="text" placeholder="" name="telefono_2" onChange={this.onChange} defaultValue={user ? `${user.telefono_2}` : ""} />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-phone-square-alt"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field ">
                                    <div className="field-label is-normal">
                                        <label className="label has-text-left">Fax</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control has-icons-left">
                                                <input className="input" type="text" placeholder="" name="fax" onChange={this.onChange} defaultValue={user ? `${user.fax}` : ""} />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-fax"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field ">
                                    <div className="field-label is-normal">
                                        <label className="label has-text-left">Tarjeta Crédito</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control has-icons-left">
                                                <input className="input" type="text" placeholder="" name="iban" onChange={this.onChange} defaultValue={user ? `${user.iban}` : ""} />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-credit-card"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacing">
                                    <div className="field is-horizontal"></div>
                                    <div className="field is-horizontal"></div>
                                    <div className="field is-horizontal"></div>
                                    <div className="field is-horizontal"> </div>
                                    <div className="field is-horizontal"> </div>
                                    <div className="field is-horizontal"></div>
                                    <div className="field is-horizontal"> </div>
                                    <div className="field is-horizontal"></div>
                                    <div className="field is-horizontal"> </div>
                                    <div className="field is-horizontal"></div>
                                    <div className="field is-horizontal"> </div>

                                </div>

                                <div className="field ">
                                    <div className="field-label is-normal">
                                        <label className="label has-text-left">Tipo</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <p className="control has-icons-left">
                                                <input className="input" type="text" placeholder="" name="tipo_negocio" onChange={this.onChange} defaultValue={user ? `${user.tipo_negocio}` : ""} />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-building"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
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

                                    <button className="button">Guardar Cambios</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="section">
                    <div classNames="container">
                        <Files
                            multiple={false} maxSize="2mb" multipleMaxSize="10mb" accept={["application/pdf", "image/jpg", "image/jpeg"]}
                            onSuccess={this.handleSuccess}
                            onError={this.handleErrors}>
                            {({ browseFiles, getDropZoneProps }) => {
                                return (
                                    <div>
                                        <label>Drag and drop files.</label>
                                        <div
                                            {...getDropZoneProps({
                                                style: {
                                                    width: 600,
                                                    minHeight: 200,
                                                    border: "2px lightgray dashed"
                                                }
                                            })}>
                                            <ol>
                                                {this.state.files.map(file => (
                                                    <li key={file.name}>{file.name}</li>
                                                ))}
                                                {this.state.errors.map(error => (
                                                    <li key={error.id}>
                                                        {error.file ? (
                                                            <span>
                                                                {error.file.name} - {error.type}
                                                            </span>
                                                        ) : (
                                                                error.type
                                                            )}
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                        <div>
                                            Dragging not convenient? Click{" "}
                                            <button onClick={browseFiles}>here</button> to select files.
                                        </div>
                                    </div>
                                );
                            }}
                        </Files>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { updateuser })(AdminPage);
