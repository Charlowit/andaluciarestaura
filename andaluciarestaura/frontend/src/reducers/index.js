import { combineReducers } from 'redux';
import auth from './auth';
import datosusuario from "./datosusuario";
import cartas from './carta';
import reducerCartas from './cartas';
import errors from './errors';
import messages from './messages';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'datosusuario', 'cartas', 'errors', 'messages', 'reducerCartas']
}


const rootReducer = combineReducers({
    auth,
    datosusuario,
    cartas,
    errors,
    messages,
    reducerCartas
});

export default persistReducer(persistConfig, rootReducer)
