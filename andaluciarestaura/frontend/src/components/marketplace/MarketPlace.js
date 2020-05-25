import React, { Component, Fragment } from 'react';
import Entity from '../cards/Entity';
import Seacher from '../searcher/Searcher';

class MarketPlace extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default MarketPlace;
