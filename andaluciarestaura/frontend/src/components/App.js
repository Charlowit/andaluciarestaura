import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavbarLog from './NavbarLog';
import Navbar from './Navbar';
import Seacher from './Searcher';
import Footer from './Footer';
import Entity from './Entity';
import LoginForm from './LoginForm';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Seacher />
        <div className="columns">
          <div className="column is-one-quarter">
            <Entity />
          </div>
          <div className="column is-one-quarter">
            <Entity />
          </div>
          <div className="column is-one-quarter">
            <Entity />
          </div>
          <div className="column is-one-quarter">
            <Entity />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
