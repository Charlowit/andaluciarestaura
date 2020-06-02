import  React, { Component, Fragment } from 'react';

export default class ProgressBar extends Component {
    render() {
        return (
            <div>
             <progress className="progress is-large is-info" max="100">60%
                
             </progress>
            
            </div>
        );

    }
}
