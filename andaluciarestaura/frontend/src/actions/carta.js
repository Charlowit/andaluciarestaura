import axios from 'axios';
import {
    GET_CARTA,
    DELETE_PRODUCTO,
    ADD_PRODUCTO,
    GET_CATEGORIAS,
    DELETE_CATEGORIA,
    ADD_CATEGORIA,
    UPLOADED_PHOTO,
    UPLOADING_PHOTO,
    REGISTER_LOADING,
    UPDATE_CATEGORIA,
    UPDATE_LOADING
} from './types';
import { tokenConfig } from './auth'
import { compose } from 'redux';
import { createMessages } from './messages';


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

    
    const body = JSON.stringify({ categoria: producto.categoriaParaProducto, name: producto.name, descripcion: producto.descripcion, titulo_precio1: producto.tamanio, titulo_precio2: producto.tamanio2, titulo_precio3: producto.tamanio3, precio1: producto.precio1, precio2: producto.precio2, precio3: producto.precio3, is_apio: producto.is_apio, is_altramuces: producto.is_altramuces, is_cacahuete: producto.is_cacahuete, is_crustaceo: producto.is_crustaceo, is_frutos_con_cascara: producto.is_frutos_con_cascara, is_gluten: producto.is_gluten, is_huevo: producto.is_huevo, is_lacteo: producto.is_lacteo, is_molusco: producto.is_molusco, is_mostaza: producto.is_mostaza, is_pescado: producto.is_pescado, is_sesamo: producto.is_sesamo, is_soja: producto.is_soja, is_sulfito: producto.is_sulfito, carta: producto.carta });

    axios.post(`/api/productact/?categoria=${producto.categoriaParaProducto}`, body, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_PRODUCTO,
                payload: res.data,

            });
        })
        .catch(err => console.log("Esto es el subir y mira que error tienes " + err));
};

export const uploadProducto = (producto, cif, is_primera) => (dispatch, getState) => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    var ruta = "/static/clientes/" + cif + "/" + producto.carta + "/" + producto.id + ".jpeg"
    if(is_primera){
      ruta = "/static/clientes/" + cif + "/" + producto.id + ".jpeg"
    }
    const body = JSON.stringify({ id: producto.id, photo: ruta, categoria: producto.categoria, name: producto.name, descripcion: producto.descripcion, titulo_precio1: producto.tamanio, titulo_precio2: producto.tamanio2, titulo_precio3: producto.tamanio3, precio1: producto.precio1, precio2: producto.precio2, precio3: producto.precio3, is_apio: producto.is_apio, is_altramuces: producto.is_altramuces, is_cacahuete: producto.is_cacahuete, is_crustaceo: producto.is_crustaceo, is_frutos_con_cascara: producto.is_frutos_con_cascara, is_gluten: producto.is_gluten, is_huevo: producto.is_huevo, is_lacteo: producto.is_lacteo, is_molusco: producto.is_molusco, is_mostaza: producto.is_mostaza, is_pescado: producto.is_pescado, is_sesamo: producto.is_sesamo, is_soja: producto.is_soja, is_sulfito: producto.is_sulfito, carta: producto.carta });
    axios.put(`/api/productact/${producto.id}/?categoria=${producto.categoria}`, body, tokenConfig(getState))
        .then(res => {

            dispatch({
                type: UPLOADED_PHOTO,
                payload: res.data,

            });
        })
        .catch(err => console.log("Esto es el subir y mira que error tienes " + err));
};

export const subirPhoto = (formdata, producto, cif_user) => dispatch => {

    dispatch({
        type: UPLOADING_PHOTO,
    });

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    console.log("En la llamda a axios --> ", producto.id)


    axios.put(`api/subirphoto/?id=${producto.id}`, formdata, config)
        .then(res => {
            console.log("La foto se ha subido correctamente")
            dispatch(createMessages({ fotoSubida: "La foto se ha guardado correctamente!." }));


        }).then(res => {





        }).catch(err => console.log(err));

    var config2 = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ id: producto.id, photo: producto.photo, categoria: producto.categoria, name: producto.name, descripcion: producto.descripcion, titulo_precio1: producto.tamanio, titulo_precio2: producto.tamanio2, titulo_precio3: producto.tamanio3, precio1: producto.precio1, precio2: producto.precio2, precio3: producto.precio3, is_apio: producto.is_apio, is_altramuces: producto.is_altramuces, is_cacahuete: producto.is_cacahuete, is_crustaceo: producto.is_crustaceo, is_frutos_con_cascara: producto.is_frutos_con_cascara, is_gluten: producto.is_gluten, is_huevo: producto.is_huevo, is_lacteo: producto.is_lacteo, is_molusco: producto.is_molusco, is_mostaza: producto.is_mostaza, is_pescado: producto.is_pescado, is_sesamo: producto.is_sesamo, is_soja: producto.is_soja, is_sulfito: producto.is_sulfito, carta: producto.carta });

    axios.put(`/api/productact/${producto.id}/?categoria=${producto.categoria}`, body, config2)
        .then(res => {
            console.log("Mira la nueva ruta --> ", res.data.photo)
            dispatch({
                type: UPLOADED_PHOTO,
                payload: res.data,

            });
        })
        .catch(err => console.log("Esto es el subir y mira que error tienes " + err));
}

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

    console.log("Añado la categoria o klk")

    const body = JSON.stringify({ name: categoria.nombreNuevaCategoria, descripcion: categoria.descripcion, posicion: categoria.posicion, info_extra: categoria.info_extra, carta: categoria.carta });
    axios.post(`/api/damelascategorias/?carta=${categoria.carta}`, body, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_CATEGORIA,
                payload: res.data
            });
        })
        .catch(err => console.log("Esto ta mal? " + err));
}

export const updateCategoria = (categoria) => (dispatch, getState) => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name: categoria.name, descripcion: categoria.descripcion, posicion: categoria.posicion, carta: categoria.carta, info_extra: categoria.info_extra });
    console.log("Body de la nueva carta ->", body)
    //axios.get(`/api/cartaadmin/?cif=${cif}`)
    axios.put(`/api/damelascategorias/${categoria.id}/?carta=${categoria.carta}`, body, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: UPDATE_CATEGORIA,
                payload: res.data
            });

        })
        .catch(err => console.log(err));
};
