import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    UPDATE_LOADING, UPDATE_SUCCESS, UPDATE_ERROR
} from "./types";

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
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user', config)
        .then(res =>{
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: AUTH_ERROR
            });
        });
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
        .then(res =>{
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: LOGIN_FAIL
            });
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
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }


    axios.post('/api/auth/logout',null, config)
        .then(res =>{
            dispatch({ 
                type: LOGOUT_SUCCESS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

// Registro

export const registro = (user) => dispatch => {

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({cif:user.cif, password:user.password, marca_comercial:user.marca_comercial, telefono_1:user.telefono_1, email:user.email});
    console.log("ESTE ES EL BODY: " + body);

    axios.post('/api/auth/register', body, config)
        .catch(err => console.log(err));

};

export const subirpdf = (formdata) => dispatch => {

      const config ={
          headers: {
            'content-type': 'multipart/form-data'
          }
      }

      axios.post('api/auth/pdf', formdata, config)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))

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

    // GET THE TOKE FROM THE STATE
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({id:user.id, cif:user.cif, marca_comercial:user.marca_comercial, nombre_fiscal:user.nombre_fiscal, razon_social:user.razon_social, direccion_fiscal:user.direccion_fiscal, localidad:user.localidad, codigo_postal:user.codigo_postal, provincia:user.provincia, email:user.email, telefono_1:user.telefono_1, telefono_2:user.telefono_2, fax:user.fax, iban:user.iban, tipo_negocio:user.tipo_negocio})

    console.log("ESTE ES EL BODY DEL UPDATE: " + body)
    // If token, add to headers config

    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.put('/api/auth/useract', body, config)
        .then(res =>{
            console.log(res.data);
        }).catch(err =>
            console.log(err));
};



