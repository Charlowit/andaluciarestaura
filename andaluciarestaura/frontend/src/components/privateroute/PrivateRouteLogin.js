import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const PrivateRouteLogin =  ({
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
            <Redirect to="/admin-page" />
        )
      }
    />
  );
  
  const mapStateToProps = state => ({
      auth: state.auth
  });
  
  export default connect(mapStateToProps)(PrivateRouteLogin);
  