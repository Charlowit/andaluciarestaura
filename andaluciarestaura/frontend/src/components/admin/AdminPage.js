import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { updateuser } from '../../actions/datosusuario';


class AdminPage extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateuser: PropTypes.func.isRequired,
    };


    onSubmit = e =>{
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

                <div class="AdminPage">
                    <div class="columns">
                        <div class="column is-2"></div>
                        <div class="column is-one-third">
                            <h2 class="label is-size-3">DATOS NEGOCIO</h2>
                        </div>
                        <div class="column is-one-third"></div>
                        <div class="column is-one-fifth"></div>
                    </div>
                    <hr />

                        <form>
                            <div class="columns">
                                <div class="column is-2"></div>
                                <div class="column is-one-third">
                                    <div class="field">
                                        <div class="field-label has-text-left">
                                            <label class="label">CIF/NIF Empresa</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="cif" onChange={this.onChange} defaultValue={user ? `${user.cif}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-id-card-alt"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field ">
                                        <div class="field-label has-text-left">
                                            <label class="label">Marca Comercial</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="marca_comercial" onChange={this.onChange} defaultValue={user ? `${user.marca_comercial}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-id-card-alt"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field ">
                                        <div class="field-label has-text-left">
                                            <label class="label">Nombre Fiscal</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="nombre_fiscal" onChange={this.onChange} defaultValue={user ? `${user.nombre_fiscal}` : ""}/>
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-id-card-alt"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field ">
                                        <div class="field-label has-text-left">
                                            <label class="label">Razón Social</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="razon_social" onChange={this.onChange} defaultValue={user ? `${user.razon_social}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-id-card-alt"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field ">
                                        <div class="field-label has-text-left">
                                            <label class="label">Dirección fiscal</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="direccion_fiscal" onChange={this.onChange} defaultValue={user ? `${user.direccion_fiscal}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-address-book"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field ">
                                        <div class="field-label has-text-left">
                                            <label class="label">Localidad</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder=""  name="localidad" onChange={this.onChange} defaultValue={user ? `${user.localidad}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-address-book"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field ">
                                        <div class="field-label has-text-left">
                                            <label class="label">Código postal</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="codigo_postal" onChange={this.onChange} defaultValue={user ? `${user.codigo_postal}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-address-book"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field ">
                                        <div class="field-label has-text-left">
                                            <label class="label">Provincia</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="provincia" onChange={this.onChange} defaultValue={user ? `${user.provincia}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-address-book"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="field ">
                                        <div class="field-label is-normal">
                                            <label class="label has-text-left">Correo Electronico</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="email" onChange={this.onChange} defaultValue={user ? `${user.email}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-envelope-square"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field ">
                                        <div class="field-label is-normal">
                                            <label class="label has-text-left">Teléfono 1</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="telefono_1" onChange={this.onChange} defaultValue={user ? `${user.telefono_1}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-phone-square-alt"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field ">
                                        <div class="field-label is-normal">
                                            <label class="label has-text-left">Teléfono 2</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="telefono_2" onChange={this.onChange} defaultValue={user ? `${user.telefono_2}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-phone-square-alt"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field ">
                                        <div class="field-label is-normal">
                                            <label class="label has-text-left">Fax</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="fax" onChange={this.onChange} defaultValue={user ? `${user.fax}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-fax"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field ">
                                        <div class="field-label is-normal">
                                            <label class="label has-text-left">Tarjeta Crédito</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="iban" onChange={this.onChange} defaultValue={user ? `${user.iban}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-credit-card"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="spacing">
                                        <div class="field is-horizontal"></div>
                                        <div class="field is-horizontal"></div>
                                        <div class="field is-horizontal"></div>
                                        <div class="field is-horizontal"> </div>
                                        <div class="field is-horizontal"> </div>
                                        <div class="field is-horizontal"></div>
                                        <div class="field is-horizontal"> </div>
                                        <div class="field is-horizontal"></div>
                                        <div class="field is-horizontal"> </div>
                                        <div class="field is-horizontal"></div>
                                        <div class="field is-horizontal"> </div>

                                    </div>

                                    <div class="field ">
                                        <div class="field-label is-normal">
                                            <label class="label has-text-left">Tipo</label>
                                        </div>
                                        <div class="field-body">
                                            <div class="field">
                                                <p class="control has-icons-left">
                                                    <input class="input" type="text" placeholder="" name="tipo_negocio" onChange={this.onChange} defaultValue={user ? `${user.tipo_negocio}` : ""} />
                                                    <span class="icon is-small is-left">
                                                        <i class="fas fa-building"></i>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-one-fifth"></div>
                            </div>
                        </form>

                    <br />
                    <div class="field is-horizontal">
                        <div class="field-body">
                            <div class="field">
                                <div class="buttons is-centered">

                                    <button class="button">Guardar Cambios</button>
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
