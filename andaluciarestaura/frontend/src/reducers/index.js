import { combineReducers } from 'redux';
import auth from './auth';
import datosusuario from "./datosusuario";

export default combineReducers({
    auth,
    datosusuario
});
