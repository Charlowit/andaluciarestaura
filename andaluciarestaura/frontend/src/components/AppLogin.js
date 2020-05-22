import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginForm from './LoginForm';
class AppLogin extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <LoginForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AppLogin;
