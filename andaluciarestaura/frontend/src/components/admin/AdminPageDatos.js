import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { getDatosNegocio } from '../actions/datosnegocio';

export class AdminPageDatos extends Component {

    static propTypes = {
        datosnegocio: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getDatosNegocio();
    }
    render() {
        return (
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
                    {this.props.datosnegocio.map(datos => (
                        <div>
                            <form action="">
                                <div class="columns" key={datos.id}>
                                    <div class="column is-2"></div>
                                    <div class="column is-one-third">
                                        <div class="field">
                                            <div class="field-label has-text-left">
                                                <label class="label">CIF/NIF Empresa</label>
                                            </div>
                                            <div class="field-body">
                                                <div class="field">
                                                    <p class="control has-icons-left">
                                                        <input class="input" type="text" placeholder="" readOnly>{datos.id}</input>
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
                                                        <input class="input" type="text" placeholder="" >{datos.id}</input>
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
                                                        <input class="input" type="text" placeholder="" readOnly>{datos.id}</input>
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
                                                        <input class="input" type="text" placeholder="">{datos.id}</input>
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
                                                        <input class="input" type="text" placeholder="">{datos.id}</input>
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
                                                        <input class="input" type="text" placeholder="">{datos.id}</input>
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
                                                        <input class="input" type="text" placeholder="">{datos.id}</input>
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
                                                        <input class="input" type="text" placeholder="">{datos.id}</input>
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
                                                        <input class="input" type="text" placeholder="">{datos.id}</input>
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
                                                        <input class="input" type="text" placeholder="">{datos.id}</input>
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
                                                        <input class="input" type="text" placeholder="">{datos.telefono_2}</input>
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
                                                        <input class="input" type="text" placeholder="">{datos.id}</input>
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
                                                        <input class="input" type="text" placeholder="" readOnly>{datos.id}</input>
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
                                                <label class="label has-text-left">Tipo negocio</label>
                                            </div>
                                            <div class="field-body">
                                                <div class="field">
                                                    <p class="control has-icons-left">
                                                        <input class="input" type="text" placeholder="" readOnly>{datos.id}</input>
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
                                            <button class="button ">Guardar Cambios</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                    <hr />
                </div>

                <h1> Hola </h1>
            </React.Fragment>
            
                
            
        );
    }
}

//Esto recoge el state definido en reducers/datosnegocio.js
const mapStateToProps = state => ({
    //Para entender esto ahce referencia a reducers
    //En el state el primer datosnegocio es el de dentro de la funcion 
    //y el segundo el que esta definido como constante en el initialState
    //Pero el primero coge el nombre de como se importe en el combineReducers del index.js
    datosnegocio: state.DatosNegocio.datosnegocio
});

export default connect(mapStateToProps, { getDatosNegocio })(AdminPageDatos);
