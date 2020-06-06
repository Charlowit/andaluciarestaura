import { combineReducers } from 'redux';
import auth from './auth';
import datosusuario from "./datosusuario";
import cartas from './carta';
import reducerCartas from './cartas'
import errors from './errors'
import messages from './messages'


export default combineReducers({
    auth,
    datosusuario,
    cartas,
    errors,
    messages,
    reducerCartas
});
