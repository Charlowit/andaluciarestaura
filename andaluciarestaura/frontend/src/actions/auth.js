import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./types";

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

    const body = JSON.stringify(user);

    axios.post('/api/auth/register', body, config)
        .catch(err => console.log(err));

};



