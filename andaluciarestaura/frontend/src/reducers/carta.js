import { GET_CARTA, DELETE_PRODUCTO, ADD_PRODUCTO } from '../actions/types.js';

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
                cartas: state.cartas.filter(carta => carta.productos.filter(producto => producto.id !==
                action.payload)),
            };
        case ADD_PRODUCTO:
            return {
                ...state,
                //cartas: [...state.cartas, action.payload]
                cartas: state.cartas.map(carta => {
                    carta.productos.push(action.payload)
                })
            };
        default:
            return state;
    }
    
}
