import { combineReducers } from 'redux';
import auth from './auth';
import datosusuario from "./datosusuario";
import carta from './carta';

export default combineReducers({
    auth,
    datosusuario,
    carta,
});
