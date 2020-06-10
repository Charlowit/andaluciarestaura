import axios from "axios";
import {GET_DATOS_USUARIO} from "./types";
import { tokenConfig } from './auth';

// GET DATOS USUARIO
export const getDatosUsuario = (cif) => (dispatch, getState) => {

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
    axios.get( `/api/datosnegocio/?cif=${cif}`, config)
        .then(res =>{
            dispatch({
                type: GET_DATOS_USUARIO,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

