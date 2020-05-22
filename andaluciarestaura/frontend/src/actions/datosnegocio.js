import axios from 'axios';
//Importamos la constante de types 
import { GET_DATOSNEGOCIO } from './types';

// GET_DATOSNEGOCIO
//La funcion de flecha dispatch lo que hace es decirle a action.type de datosnegocio.js
//Que accion se va a realizar mediante el type: GET_DATOSNEGOCIO
export const getDatosNegocio = () => dispatch => {
    //Aqui usamos axios pero se puede usar el fech para leer la api igualmente
    //lo bueno de axios es que permite hacer llamadas asincronas
    axios
        //Definimos que se va a coger y las promesas '.then()'
        .get('/api/user/')
        .then(res =>{
            dispatch({
                //Tipo de accion a realizar
                type: GET_DATOSNEGOCIO,
                payload: res.data
            });
        })
        .catch(err => console.log("Error en actions/datosnegocio.js: " + err));
};
