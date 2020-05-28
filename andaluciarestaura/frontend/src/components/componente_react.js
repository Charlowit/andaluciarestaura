import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

export default class ComponenteReact extends Component {

    state = {
        cif: window.django.cif_cliente,
        mensaje: window.django.mensaje
    }

    render() {
        return (
            <h1>{this.state.mensaje} {this.state.cif}</h1>
        );
    }

}
ReactDOM.render(
    <ComponenteReact />,
    document.getElementById('componente_react')
)

