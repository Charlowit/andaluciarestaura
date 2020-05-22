import React, { Component } from 'react';

var sectionStyle = {
    borderTopLeftRadius: '5%',
    borderTopRightRadius: '5%'
};

class Entity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            random: 0,
            values: ["has-text-success", "has-text-warning", "has-text-danger"]
        }
    }

    render() {
        var min = 0;
        var max = 2;
        var rand = Math.round(min + (Math.random() * (max - min)));
        var style = "is-pulled-right " + this.state.values[rand];
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img style={sectionStyle} src="https://www.bilbaoclick.com/wp-content/uploads/2018/08/the-boar-bar-moda-cento-bilbao.jpg" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div class="columns">
                            <div class="column">
                                <div className="content">
                                    <div className="is-clearfix">
                                        <h6 className="heading is-pulled-left has-text-left">Bar: Ciudad</h6>
                                    </div>
                                </div>
                                <div className="content">
                                    <p>Los Carmenes</p>
                                    <p>Calle Dr. Sánchez Mariscal</p>
                                    <p>18012 Granada</p>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div class="column">
                                <div className="content">
                                    <div className="is-clearfix">
                                        <h6 className={style}><i class="fas fa-circle is-size-2"></i></h6>
                                    </div>
                                </div>
                                <div className="content">
                                    <p className="is-pulled-right ">Aforo: Concurrido</p>
                                </div>
                            </div>
                        </div>

                        <div className="buttons are-medium is-centered">
                            <button className="button is-light is-medium"><span className="">Entrar</span></button>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Entity;
