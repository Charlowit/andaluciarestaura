import { GET_DATOSNEGOCIO } from "../actions/types.js";

const initialState = {
    datosnegocio: []
};

//Creamos una funcion que se le va a pasar el estado actual y
//la accion que va a coger de las acciones que definimos en la carpeta actions
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_DATOSNEGOCIO:
            return {
                //Cualquier cosa que tengamos en el state 
                ...state,
                datosnegocio: action.payload
            };
        default:
            return state;
    }
}
