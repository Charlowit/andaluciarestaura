import { GET_CARTA, DELETE_PRODUCTO, ADD_PRODUCTO, GET_PRODUCTOS, GET_CATEGORIAS, DELETE_CATEGORIA, ADD_CATEGORIA, UPLOADED_PHOTO, UPLOADING_PHOTO } from '../actions/types.js';

const initialState = {
    cartas: [],
    productos: [],
    categorias: [],
    isUpdatingPhoto: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CARTA:
            return {
                ...state,
                cartas: state.cartas.concat(action.payload),
                isUpdatingPhoto: false,
            };
        case DELETE_PRODUCTO:
            return {
                ...state,
                cartas: state.cartas.filter(carta => carta.id !== action.payload),
                isUpdatingPhoto: false,
            };
        case ADD_PRODUCTO:
            return {
                ...state,
                cartas: [...state.cartas, action.payload],
                isUpdatingPhoto: false,
            };
        case GET_PRODUCTOS:
            return {
                ...state,
                cartas: cartas,
                productos: action.payload,
                isUpdatingPhoto: false,
            };
        case GET_CATEGORIAS:
            return {
                ...state,
                categorias: action.payload,
                cartas: [],
                isUpdatingPhoto: false,
            };
        case DELETE_CATEGORIA:
            return {
                ...state,
                categorias: state.categorias.filter(categoria => categoria.id !== action.payload),
                isUpdatingPhoto: false,
            };
        case ADD_CATEGORIA:
            return {
                ...state,
                categorias: [...state.categorias, action.payload],
                isUpdatingPhoto: false,
            };
        case UPLOADING_PHOTO:
            return {
                ...state,
                isUpdatingPhoto: true,
            }
        case UPLOADED_PHOTO:
            return {
                ...state,
                isUpdatingPhoto: false,
            }
        default:
            return state;
    }
    
}
