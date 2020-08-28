import { GET_CARTA, DELETE_PRODUCTO, ADD_PRODUCTO, GET_PRODUCTOS, GET_CATEGORIAS, DELETE_CATEGORIA, ADD_CATEGORIA, UPLOADED_PHOTO, UPLOADING_PHOTO, UPDATE_CATEGORIA, UPDATE_PRODUCTO } from '../actions/types.js';

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
        case UPDATE_CATEGORIA:
            var categorias1 = state.categorias.map(categoria => (
                categoria.id == action.payload.id ? categoria = action.payload : categoria = categoria
            ))
            for(var a = 0; a < categorias1.length; a++){
                for(var b = 0; b < categorias1.length; b++){
                    if(categorias1[a].posicion < categorias1[b].posicion){
                        var aux = categorias1[b]
                        categorias1[b] = categorias1[a]
                        categorias1[a] = aux
                    }
                }
            }
            for(var a = 0; a < categorias1.length; a++){
                console.log("Mira el orden ahora --> ", categorias1[a].name, " y su posicion --> ", categorias1[a].posicion)
            }
            return {
                ...state,
                categorias: categorias1
            }
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
               
            }

        case UPDATE_PRODUCTO:

            return {
                ...state,
                cartas: state.cartas.map(producto => (
                    producto.id == action.payload.id ? producto = action.payload : producto = producto
                ))
            }
        default:
            return state;
    }
    
}
