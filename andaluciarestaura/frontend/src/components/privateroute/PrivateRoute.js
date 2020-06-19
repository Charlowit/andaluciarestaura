
import React, { Component, Fragment} from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute =  ({
  comp: Component, // use comp prop
  auth: { isAuthenticated, token },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
        !isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
