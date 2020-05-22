import React, { Component } from 'react';
const image = "https://pngimage.net/wp-content/uploads/2018/06/plato-de-comida-png-5.png";
class Seacher extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="level">
                        <div className="level-item" >
                            <div className="seacher-div">
                                <div className="field">
                                    <label className="label is-medium">Tipo de sitio</label>
                                    <div className="control has-icons-left">
                                        <div className="select is-fullwidth">
                                            <select>
                                                <option>Bar</option>
                                                <option>Restaurante</option>
                                                <option>Hotel</option>
                                            </select>
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-utensils"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label is-medium">Provincia</label>
                                    <div className="control has-icons-left">
                                        <div className="select is-fullwidth">
                                            <select>
                                                <option>Almería</option>
                                                <option>Cádiz</option>
                                                <option>Córdoba</option>
                                                <option>Granada</option>
                                                <option>Huelva</option>
                                                <option>Jaén</option>
                                                <option>Malaga</option>
                                                <option>Sevilla</option>
                                                
                                            </select>
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-globe"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="level-item">
                                <img className="image" src={image} />
                        </div>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}


export default Seacher;
