import { combineReducers } from 'redux';
//Importamos lo que queremos devolver
import DatosNegocio from './datosnegocio';

export default combineReducers({
    //Y pasamos los datos tambien se pueden meter en un diccionario 'Datos: DatosNegocio' por ejemplo
    DatosNegocio
});
