import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    UPDATE_LOADING, UPDATE_SUCCESS, UPDATE_ERROR, GET_ERRORS, REGISTER_LOADING, REGISTER_FAILED, REGISTER_SUCCESS, USER_LOADED_ADMIN_PAGE, TRY_LOGIN
} from "./types";

import { createMessages } from './messages'

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch({ type: USER_LOADING });

    // GET THE TOKE FROM THE STATE
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: AUTH_ERROR
            });

            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};

export const loadUserAdminPage = (cif) => (dispatch, getState) => {

    dispatch({
        type: TRY_LOGIN,
    });
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    console.log("Mira ese cif guapeton -> ", cif)

    axios.get(`/api/auth/datos/getuser/?cif=${cif}`, config)
        .then(res => {
            dispatch({
                type: USER_LOADED_ADMIN_PAGE,
                payload: res.data
            });
        }).catch(
            err => console.log(err)
        );
    
    console.log("Despues llamada axios")

};

// LOGIN USER
export const login = (cif, password) => dispatch => {

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //REQUEST BODY

    const body = JSON.stringify({ cif, password });

    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: LOGIN_FAIL
            });

            dispatch(createMessages({ loginError: "Credenciales incorrectas." }));
        });
};

// LOGOUT
export const logout = () => (dispatch, getState) => {

    // GET THE TOKE FROM THE STATE
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }


    axios.post('/api/auth/logout/', null, config)
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        }).catch(err => console.log(err));
};

// Registro (ESTE NO FUNCIONA EL REGISTRO DE VERDAD ESTA EN EL DEL PDF)

export const cambiarpassword = (user) => (dispatch, getState) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.put('api/auth/password', user, config)
        .then(res => {
            dispatch(createMessages({ passcorrect: "Contraseña cambiada correctamente." }));
            console.log("Password reseteada correctamente!")
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        })
};

export const registro = (user) => dispatch => {

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ cif: user.cif, password: user.password, nombre: user.nombre, apellidos: user.apellidos, telefono_1: user.telefono_1, email: user.email });
    console.log("ESTE ES EL BODY: " + body);

    axios.post('/api/auth/register', body, config)
        .then(res => {

        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });



};

//Este es el registro

export const subirpdf = (formdata) => dispatch => {
    dispatch({
        type: REGISTER_LOADING,
    });
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    console.log("FORM DATA " + formdata.pdf)
    axios.post('api/auth/pdf', formdata, config).then(

    )
        .then(res => {

            dispatch(createMessages({ datosCambiados: "Registro realizado correctamente." }));
            dispatch({
                type: REGISTER_SUCCESS,
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: REGISTER_FAILED
            });
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });

};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};

// CHANGE DATA USER METHOD PUT
export const updateuser = (user) => (dispatch, getState) => {

    console.log("USER DENTRO DE ACTION: " + user.id)
    console.log("NOMBRE FISCAL DENTRO DE ACTION: " + user.nombre_fiscal)
    dispatch({
        type: UPDATE_LOADING,
    });

    // GET THE TOKE FROM THE STATE
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ id: user.id, cif: user.cif, nombre_fiscal: user.nombre_fiscal, nombre: user.marca_comercial, razon_social: user.razon_social, direccion_fiscal: user.direccion_fiscal, localidad: user.localidad, codigo_postal: user.codigo_postal, provincia: user.provincia, email: user.email, telefono_1: user.telefono_1, telefono_2: user.telefono_2, apellidos: user.fax, tipo_negocio: user.tipo_negocio, is_premium: user.is_premium })

    console.log("ESTE ES EL BODY DEL UPDATE: " + body)
    // If token, add to headers config

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.put('/api/auth/useract', body, config)
        .then(res => {
            dispatch(createMessages({ datosCambiados: "Datos guardados correctamente." }));
            dispatch({
                type: UPDATE_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
           
            dispatch({
                type: UPDATE_ERROR
            });

        });
};
