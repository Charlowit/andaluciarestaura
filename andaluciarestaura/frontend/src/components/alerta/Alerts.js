import  React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };


    componentDidUpdate(prevProps){
        const { error, alert, message } = this.props;
        console.log("Error --> ",  error.msg)
        
        if (error !== prevProps.error) {
            if(error.msg.localidad)
                alert.error('El campo Localidad es obligatorio.');
            if(error.msg.codigo_postal)
                alert.error("El campo Codigo postal es obligatorio.")
            if(error.msg.nombre_fiscal)
                alert.error("El campo Nombre fiscal es obligatorio.")
            if(error.msg.direccion_fiscal)
                alert.error("El campo Direccion fiscal es obligatorio.")
            if(error.msg.email)
                alert.error("El campo Correo Electronico es obligatorio.")
            if(error.msg.telefono_2)
                alert.error("El campo Telefono 2 es obligatorio.")
            if(error.msg.fax)
                alert.error("El campo Eslogan es obligatorio.")
            if(error.msg.password)
                alert.error("El campo Contraseña es obligatorio.")
            if(error.msg.telefono_1)
                alert.error("El campo Telefono es obligatorio.")
            if(error.msg.marca_comercial)
                alert.error("El campo Marca Comercial es obligatorio.")
            if(error.msg.establecimiento)
                alert.error("Debes de rellenar el campo Establecimiento.")
            if(error.msg.url_facebook)
                alert.error("Debes de rellenar el campo url de Facebook.")
            if(error.msg.url_instagram)
                alert.error("Debes de rellenar el campo url de Instagram.")
            if(error.msg.url_tripadvisor)
                alert.error("Debes de rellenar el campo url de Tripadvisor.")
            if(error.msg.eslogan)
                alert.error("Debes de rellenar el campo del nuevo eslogan.")
            if(error.msg.name)
                alert.error("Debes de rellenar el campo Nombre.")
            if(error.msg.precio1)
                alert.error("Debes de rellenar el campo del primer precio. O bien has introducido mal el preccio, recuerda es con punto. Ej: 2.5")
            if(error.msg.descripcion)
                alert.error("Debes de rellenar el campo Descripcion del nuevo producto.")
            if(error.msg.categoria)
                alert.error("Debes de rellenar el campo Categoria del nuevo producto.")
            if(String(error.msg).includes("NOT NULL constraint failed: carta_carta.name")){
                alert.error("El campo Nombre de la nueva carta es obligatorio.")
            }
            if(String(error.msg).includes("NOT NULL constraint failed: carta_carta.plantilla")){
                alert.error("El campo Plantilla de la nueva carta es obligatorio.")
            }
            if(String(error.msg).includes("NOT NULL constraint failed: carta_carta.establecimiento")){
                alert.error("El campo Establecimiento de la nueva carta es obligatorio.")
            }
            
            if(error.msg.cif){
                console.log(error.msg.cif[0])
                if (error.msg.cif[0] == "This field may not be blank."){
                    //alert.error("El campo CIF es obligatorio")
                } else if (error.msg.cif[0] == "user with this cif already exists.") {
                    alert.error("Ese CIF ya esta siendo utilizado.")
                }
            } 
        
        }

        if(message !== prevProps.message){
            if(message.datosCambiados) {
                alert.success(message.datosCambiados);
            }

            if(message.registroCompleto){
                alert.success(message.registroCompleto);
            }

            if(message.loginError){
                alert.error("El CIF o la contraseña son incorrectos.")
            }
            if(message.fotoSubida) {
                alert.success(message.fotoSubida);
            }
            if(message.nuevaCarta) {
                alert.success(message.nuevaCarta);
            }
            if(message.newEslogan) {
                alert.success(message.newEslogan);
            }
            if(message.newNombreCarta) {
                alert.success(message.newNombreCarta);
            }
            if(message.newEstablecimiento) {
                alert.success(message.newEstablecimiento);
            }
            if(message.newUrl) {
                alert.success(message.newUrl);
            }
            if(message.nuevaCategoria) {
                alert.success(message.nuevaCategoria);
            }
            if(message.nuevoProducto) {
                alert.success(message.nuevoProducto);
            }
            if(message.updateCategoria) {
                alert.success(message.updateCategoria);
            }
            if(message.borrarCategoria) {
                alert.success(message.borrarCategoria);
            }
            if(message.borrarProducto) {
                alert.success(message.borrarProducto);
            }
            if(message.nuevaVisualizacion) {
                alert.success(message.nuevaVisualizacion);
            }
            if(message.updateNameCategoria){
                alert.success(message.updateNameCategoria)
            }
            if(message.updateProducto){
                alert.success(message.updateProducto)
            }
            
        }
    }




    render() {
        return (
            <Fragment>
                
            </Fragment>
        );
        
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages 
});

export default connect(mapStateToProps)(withAlert()(Alerts));
