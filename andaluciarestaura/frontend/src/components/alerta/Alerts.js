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
        console.log(error.msg)
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
                alert.error("El campo Telefono 1 es obligatorio.")
            if(error.msg.marca_comercial)
                alert.error("El campo Marca Comercial es obligatorio.")
            if(error.msg.cif){
                console.log(error.msg.cif[0])
                if (error.msg.cif[0] == "This field may not be blank."){
                    alert.error("El campo CIF es obligatorio")
                } else if (error.msg.cif[0] == "user with this cif already exists.") {
                    alert.error("Ese CIF ya esta siendo utilizado.")
                }
            } 
            if(error.msg.non_field_errors)
                alert.error("El CIF o la contraseña son incorrectos.")
                
        
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

        }
    }




    render() {
        return <Fragment/>;
        
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages 
});

export default connect(mapStateToProps)(withAlert()(Alerts));
