import axios from "axios";
import {UPDATE_ERROR, UPDATE_LOADING, UPDATE_SUCCESS, GET_DATOS_USUARIO} from "./types";
import { tokenConfig } from './auth';

// CHANGE DATA USER METHOD PUT
export const updateuser = (id, user) => (dispatch, getState) => {
    console.log("Entro aqui");
    console.log(id);
    console.log(user);
    //User Loading
    dispatch({ type: UPDATE_LOADING });
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
    axios.post(`/api/auth/user/${id}`, user, config)

        .then(res =>{
            dispatch({
                type: UPDATE_SUCCESS,
                payload: res.data
            });
        }).catch(err =>
        console.log(err));
        dispatch({
            type: UPDATE_ERROR
        });
};

// GET DATOS USUARIO
export const getDatosUsuario = () => (dispatch, getState) => {

    axios.get('/api/auth/datauser', tokenConfig(getState))
        .then(res =>{
            dispatch({
                type: GET_DATOS_USUARIO,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

