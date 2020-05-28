import React, {Component, Fragment} from 'react';

import Styles from './Styles'
import { Field } from 'react-final-form'
import Wizard from './Wizard'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert("Registro completado correctamente! Revisa tu correo electronico, la carpeta spam incluida")
  window.alert(JSON.stringify(values, 0, 2)) //Cambiar por nuestro actions y redux
}



const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : '*Obligatorio')

export class Register extends Component {


    render(){
        return(
          <Styles>
            <h1>Bienvenido a Andalucia Restaura</h1>
            <h2>Algo revolucionario va a pasar en tu negocio a partir de este momento.</h2>
            <p>
              ¡Unete a nosotros!, No olvides rellenar todos los campos para comenzar.
            </p>
            <Wizard
              initialValues={{ }}
              onSubmit={onSubmit}
            >
              <Wizard.Page
                validate={values => {
                  const errors = {}
                  if (!values.cif) {
                    errors.cif = 'Obligatorio'
                  }
                  if (!values.nombre_fiscal) {
                    errors.nombre_fiscal = 'Obligatorio'
                  }
                  return errors
                }}
              >
                <div>
                  <label>CIF/NIF</label>
                  <Field
                    name="cif"
                    component="input"
                    type="text"
                    placeholder="X0000000"
                    validate={required}
                  />
                  <Error name="cif" />
                </div>
                <div>
                    <label>Razon Social:</label>
                      <div>
                        <label>
                          <Field
                            name="stooge"
                            component="input"
                            type="radio"
                            value="sl"
                          />{' '}
                          SL
                        </label>
                        <label>
                          <Field name="sa" component="input" type="radio" value="sa" />{' '}
                          SA
                        </label>
                        <label>
                          <Field
                            name="stooge"
                            component="input"
                            type="radio"
                            value="autonomo"
                          />{' '}
                          Autónomo
                        </label>
                      </div>
                </div>
                <div>
                  <label>Nombre Fiscal</label>
                  <Field
                    name="nombre_fiscal"
                    component="input"
                    type="text"
                    placeholder="Nombre Fiscal"
                    validate={required}
                  />
                  <Error name="nombre_fiscal" />
                </div>
                </Wizard.Page>
                <Wizard.Page
                    validate={values => {
                      const errors = {}
                      if (!values.marca_comercial) {
                        errors.marca_comercial = 'Obligatorio'
                      }
                      return errors
                    }}
                    >
                    <div>
                        <label>Tipo de Negocio:</label>
                          <div>
                            <label>
                              <Field
                                name="bar"
                                component="input"
                                type="radio"
                                value="Bar"
                              />{' '}
                              Bar
                            </label>
                            <label>
                              <Field name="restaurante" component="input" type="radio" value="Restaurante" />{' '}
                              Restaurante
                            </label>
                            <label>
                              <Field
                                name="hotel"
                                component="input"
                                type="radio"
                                value="Hotel"
                              />{' '}
                              Hotel
                            </label>
                              <label>
                                  <Field
                                    name="ocio_nocturno"
                                    component="input"
                                    type="radio"
                                    value="ocio_nocturno"
                                  />{' '}
                                  Ocio Nocturno
                                </label>
                        </div>
                    </div>
                    <div>
                        <label>Marca Comercial</label>
                          <Field
                            name="marca_comercial"
                            component="input"
                            type="text"
                            placeholder="Marca Comercial"
                            validate={required}
                          />
                        <Error name="marca_comercial" />
                    </div>
                </Wizard.Page>
                <Wizard.Page
                            validate={values => {
                              const errors = {}
                              if (!values.tipo_via) {
                                errors.tipo_via = 'Obligatorio'
                              }
                              if (!values.direccion_fiscal) {
                                errors.direccion_fiscal = 'Obligatorio'
                              }
                              return errors
                            }}
                            >
                        <div>
                            <div>
                              <label>Tipo de Vía</label>
                              <Field
                                name="tipo_via"
                                component="input"
                                type="text"
                                placeholder="Tipo de via"
                                validate={required}
                              />
                              <Error name="tipo_via" />
                            </div>

                            <div>
                              <label>Dirección Fiscal</label>
                              <Field
                                name="direccion_fiscal"
                                component="input"
                                type="text"
                                placeholder="Direccion Fiscal"
                                validate={required}
                              />
                              <Error name="direccion_fiscal" />
                            </div>
                        </div>
                    </Wizard.Page>
                    <Wizard.Page
                            validate={values => {
                              const errors = {}
                              if (!values.tipo_via) {
                                errors.tipo_via = 'Obligatorio'
                              }
                              if (!values.direccion_fiscal) {
                                errors.direccion_fiscal = 'Obligatorio'
                              }
                              return errors
                            }}
                            >
                        <div>
                            <div>
                              <label>Tipo de Vía</label>
                              <Field
                                name="tipo_via"
                                component="input"
                                type="text"
                                placeholder="Tipo de via"
                                validate={required}
                              />
                              <Error name="tipo_via" />
                            </div>

                            <div>
                              <label>Dirección Fiscal</label>
                              <Field
                                name="direccion_fiscal"
                                component="input"
                                type="text"
                                placeholder="Direccion Fiscal"
                                validate={required}
                              />
                              <Error name="direccion_fiscal" />
                            </div>
                        </div>
                    </Wizard.Page>
                    <Wizard.Page
                            validate={values => {
                              const errors = {}
                              if (!values.localidad) {
                                errors.localidad = 'Obligatorio'
                              }
                              if (!values.codigo_postal) {
                                errors.codigo_postal = 'Obligatorio'
                              }

                              return errors
                            }}
                            >
                        <div>
                            <div>
                              <label>Localidad</label>
                              <Field
                                name="localidad"
                                component="input"
                                type="text"
                                placeholder="Localidad"
                                validate={required}
                              />
                              <Error name="localidad" />
                            </div>

                            <div>
                              <label>Código Postal</label>
                              <Field
                                name="codigo_postal"
                                component="input"
                                type="text"
                                placeholder="Codigo Postal"
                                validate={required}
                              />
                              <Error name="codigo_postal" />
                            </div>
                        </div>
                    </Wizard.Page>
                    <Wizard.Page
                        validate={values => {
                            const errors = {}
                            if (!values.provincia) {
                                errors.provincia = 'Obligatorio'
                            }
                            if (!values.telefono_1) {
                                errors.telefono_1 = 'Obligatorio'
                            }
                            return errors
                        }}
                    >
                        <div>
                              <label>Provincia</label>
                              <Field
                                name="provincia"
                                component="input"
                                type="text"
                                placeholder="Provincia"
                                validate={required}
                              />
                              <Error name="provincia" />
                        </div>
                        <div>
                              <label>Teléfono</label>
                              <Field
                                name="telefono_1"
                                component="input"
                                type="text"
                                placeholder="Telefono"
                                validate={required}
                              />
                              <Error name="telefono_1" />
                        </div>
                    </Wizard.Page>
                    <Wizard.Page
                        validate={values => {
                            const errors = {}
                            if (!values.telefono_2) {
                                errors.telefono_2 = 'Obligatorio'
                            }
                            if (!values.fax) {
                                errors.fax = 'Obligatorio'
                            }
                            return errors
                        }}
                    >
                        <div>
                              <label>Móvil</label>
                              <Field
                                name="telefono_2"
                                component="input"
                                type="text"
                                placeholder="Movil"
                                validate={required}
                              />
                              <Error name="telefono_2" />
                        </div>
                        <div>
                              <label>Fax</label>
                              <Field
                                name="fax"
                                component="input"
                                type="text"
                                placeholder="Fax"
                                validate={required}
                              />
                              <Error name="fax" />
                        </div>
                    </Wizard.Page>
                    <Wizard.Page
                        validate={values => {
                            const errors = {}
                            if (!values.password) {
                                errors.password = 'Obligatorio'
                            }

                            return errors
                        }}
                    >
                        <div>
                              <label>Contraseña</label>
                              <Field
                                name="password"
                                component="input"
                                type="password"
                                placeholder="*****"
                                validate={required}
                              />
                              <Error name="password" />
                        </div>

                    </Wizard.Page>
            </Wizard>
          </Styles>
        )
    }

}

export default Register;
