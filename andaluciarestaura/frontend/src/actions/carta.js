import axios from 'axios';
import { GET_CARTA, DELETE_PRODUCTO, ADD_PRODUCTO, GET_CATEGORIAS, DELETE_CATEGORIA, ADD_CATEGORIA } from './types';
import { tokenConfig } from './auth'
import { compose } from 'redux';

//FUNCIONA EL DELETE
export const deleteproducto = (id, id_categoria) => (dispatch, getState) => {

    axios.delete(`/api/productact/${id}/?categoria=${id_categoria}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_PRODUCTO,
                payload: id
            });
        })
        .catch(err => console.log("Esto ta mal? " + err));
}
export const subirproducto = (producto) => (dispatch, getState) => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ categoria: producto.categoriaParaProducto, name: producto.name, descripcion: producto.descripcion, precio1: producto.precio1, precio2: producto.precio2, precio3: producto.precio3, is_apio: producto.is_apio, is_altramuces: producto.is_altramuces, is_cacahuete: producto.is_cacahuete, is_crustaceo: producto.is_crustaceo, is_frutos_con_cascara: producto.is_frutos_con_cascara, is_gluten: producto.is_gluten, is_huevo: producto.is_huevo, is_lacteo: producto.is_lacteo, is_molusco: producto.is_molusco, is_mostaza: producto.is_mostaza, is_pescado: producto.is_pescado, is_sesamo: producto.is_sesamo, is_soja: producto.is_soja, carta: producto.carta });

    axios.post(`/api/productact/?categoria=${producto.categoria}`, body, config)
        .then(res => {
            dispatch({
                type: ADD_PRODUCTO,
                payload: res.data,

            });
        })
        .catch(err => console.log("Esto es el subir y mira que error tienes " + err));
};


export const getCategorias = (carta_id) => (dispatch, getState) => {

    console.log("Pido las cats de --> ")

    //axios.get(`/api/cartaadmin/?cif=${cif}`)
    axios.get(`/api/damelascategorias/?carta=${carta_id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_CATEGORIAS,
                payload: res.data
            });

            res.data.map(categoria => (
                axios.get(`/api/productact/?categoria=${categoria.id}`, tokenConfig(getState))
                    .then(res => {
                        dispatch({
                            type: GET_CARTA,
                            payload: res.data
                        });
                        console.log("Productos enviaos de " + categoria.id)
                    })
                    .catch(err => console.log(err))


            ));
        })
        .catch(err => console.log(err));
};


export const deleteCategoria = (categoria_id, carta_id) => (dispatch, getState) => {

    axios.delete(`/api/damelascategorias/${categoria_id}/?carta=${carta_id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_CATEGORIA,
                payload: categoria_id
            });
        })
        .catch(err => console.log("Esto ta mal? " + err));
}

export const addCategoria = (categoria) => (dispatch, getState) => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name: categoria.nombreNuevaCategoria, descripcion: categoria.descripcion, posicion: categoria.posicion, info_extra: categoria.info_extra, carta: categoria.carta});
    console.log("Mira el body de la categoria --> " + body)
    axios.post(`/api/damelascategorias/?carta=${categoria.carta}`, body, config)
        .then(res => {
            dispatch({
                type: ADD_CATEGORIA,
                payload: res.data
            });
        })
        .catch(err => console.log("Esto ta mal? " + err));
}