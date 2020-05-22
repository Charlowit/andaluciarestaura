import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import NavbarLog from './NavbarLog';
import Footer from './Footer';
import AdminPageDatos from './AdminPageDatos_';

//Esto conecta Redux con React
import { Provider } from 'react-redux';
import store from '../store';



class AdminPage extends Component {
  render() {
    return (
        //Esto envuelve lo que queramos devolver
        //Aqui estamos diciendo que el provider recoja de store
        <Provider store={store}>
            <Fragment>
                <NavbarLog />
                <AdminPageDatos />
                <Footer />
            </Fragment>
        </Provider>
    );
  }
}

export default AdminPage;
