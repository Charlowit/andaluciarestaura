import { GET_CARTA, DELETE_PRODUCTO, ADD_PRODUCTO, GET_PRODUCTOS, GET_CATEGORIAS, DELETE_CATEGORIA, ADD_CATEGORIA } from '../actions/types.js';

const initialState = {
    cartas: [],
    productos: [],
    categorias: [],
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CARTA:
            return {
                ...state,
                cartas: state.cartas.concat(action.payload)
            };
        case DELETE_PRODUCTO:
            return {
                ...state,
                cartas: state.cartas.filter(carta => carta.id !== action.payload)
            };
        case ADD_PRODUCTO:
            return {
                ...state,
                cartas: [...state.cartas, action.payload]
            };
        case GET_PRODUCTOS:
            return {
                ...state,
                cartas: cartas,
                productos: action.payload,  
            };
        case GET_CATEGORIAS:
            return {
                ...state,
                categorias: action.payload,
                cartas: []
            };
        case DELETE_CATEGORIA:
            return {
                ...state,
                categorias: state.categorias.filter(categoria => categoria.id !== action.payload)
            };
        case ADD_CATEGORIA:
            return {
                ...state,
                categorias: [...state.categorias, action.payload]
            };
        default:
            return state;
    }
    
}
