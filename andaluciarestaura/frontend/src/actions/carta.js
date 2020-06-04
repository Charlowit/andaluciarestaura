import axios from 'axios';
import { GET_CARTA, DELETE_PRODUCTO, ADD_PRODUCTO } from './types';
import { tokenConfig } from './auth'

export const getCarta = (cif) => (dispatch, getState) => {

    //axios.get(`/api/cartaadmin/?cif=${cif}`)
    axios.get(`/api/cartaadmin/?cif=${cif}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_CARTA,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};


//FUNCIONA EL DELETE
/*
export const deleteproducto = id => (dispatch, getState) => {
    
    axios.get(`/api/productact/?id=${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_PRODUCTO,
                payload: res.data
            });
        })
        .catch(err => console.log("Esto ta mal? "  + err));
}
*/

//FUNCIONA EL DELETE

export const deleteproducto = (id, id_carta) => (dispatch, getState) => {
    
    axios.get(`/api/productact/?carta=${id_carta}&id=${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_PRODUCTO,
                payload: id_carta
            });
        })
        .catch(err => console.log("Esto ta mal? "  + err));
}


export const subirproducto = (producto) => (dispatch, getState) => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ categoria: producto.categoria, name: producto.name, descripcion: producto.descripcion, precio1: producto.precio1, precio2: producto.precio2, precio3: producto.precio3, is_apio: producto.is_apio, is_altramuces: producto.is_altramuces, is_cacahuete: producto.is_cacahuete, is_crustaceo: producto.is_crustaceo, is_frutos_con_cascara: producto.is_frutos_con_cascara, is_gluten: producto.is_gluten, is_huevo: producto.is_huevo, is_lacteo: producto.is_lacteo, is_molusco: producto.is_molusco, is_mostaza: producto.is_mostaza, is_pescado: producto.is_pescado, is_sesamo: producto.is_sesamo, is_soja: producto.is_soja, carta: producto.carta});
    //const body = JSON.stringify({ categoria: producto.categoria, name: producto.name, descripcion: producto.descripcion});
    //console.log(body)
    console.log("mira el json -> " + body)

    axios.post(`/api/productact/`, body, config)
        .then(res => {
            dispatch({
                type: ADD_PRODUCTO,
                payload: res.data,
                
            });
        })
        .catch(err => console.log("Esto es el subir y mira que error tienes "  + err));
}