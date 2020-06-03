import { GET_CARTA, DELETE_PRODUCTO } from '../actions/types.js';

const initialState = {
    cartas: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CARTA:
            return {
                ...state,
                cartas: action.payload
            };
        case DELETE_PRODUCTO:
            return {
                ...state,
                cartas: state.cartas.filter(productos.filter(producto => producto.id)) 
            }
        default:
            return state;
    }
}
