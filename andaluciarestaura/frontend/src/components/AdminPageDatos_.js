import React, { Component } from 'react';


class AdminPageDatos extends Component {

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
                    <form action="">
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
                                                <input class="input" type="text" placeholder="" readOnly />
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
                                                <input class="input" type="text" placeholder="" readOnly />
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
                                                <input class="input" type="text" placeholder="" />
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
                                                <input class="input" type="text" placeholder="" />
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
                                                <input class="input" type="text" placeholder="" />
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
                                                <input class="input" type="text" placeholder="" />
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
                                                <input class="input" type="text" placeholder="" />
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
                                                <input class="input" type="text" placeholder="" />
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
                                                <input class="input" type="text" placeholder="" />
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
                                                <input class="input" type="text" placeholder="" />
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
                                                <input class="input" type="text" placeholder="" />
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
                                                <input class="input" type="text" placeholder="" />
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
                                                <input class="input" type="text" placeholder="" />
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
                                                <input class="input" type="text" placeholder="Name" />
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
                    <hr />
                </div>
            </React.Fragment>
        );
    }
}


export default AdminPageDatos;