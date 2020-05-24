import React, { Component, Fragment } from 'react';

const div1 = {
    marginTop: '1%'
};
const div2 = {
    backgroundColor: 'red'
};
const div3 = {
    backgroundColor: 'orange'
};
const div4 = {
    backgroundColor: 'orange'
};
const div5 = {
    backgroundColor: 'green'
};
const div6 = {
    marginTop: '0%'
};
const div7 = {
    border: '2px solid green',
    marginLeft: '2%',
    marginTop: '5%'
};
const div8 = {
    display: 'inline-block'
};
const div9 = {
    backgroundColor: 'yellow'
};
const div10 = {
    display: 'inline-block',
    marginLeft: '2%'
};
const div11 = {
    marginTop:'2%'
};
const div12 = {
    marginTop: '-8%'
};
const div13 = {
    width:'90%'
};


export class DeliveryPage extends Component {


    render(){
        return(
            <Fragment>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-four-fifths">
                                <h1 className="title">LISTADO DE PEDIDOS</h1>
                            </div>
                            <div className="column">
                                <div className="select">
                                    <select>
                                        <option>25/05/2020 - 26/05/2020</option>
                                        <option>26/05/2020 - 27/05/2020</option>
                                        <option>27/05/2020 - 28/05/2020</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p><b> Estado del pedido </b></p>
                        <div className="select" style={div1}>
                            <select>
                                <option>TODOS</option>
                                <option style={div2}>EN ESPERA</option>
                                <option style={div3}>EN COCINA</option>
                                <option style={div4}>EN REPARTO</option>
                                <option selected="default" style={div5}>FINALIZADO</option>
                            </select>
                        </div>
                        <hr />
                        <div className="columns" style={div6}>
                            <div className="column" style={div7}>
                                <div>
                                    <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-map-marker-alt">   </i>
                            </span>
                                        <p style={div8}><b> Entrega en: </b></p>
                                    </div>
                                    <p style={div9}> Avnida Juan Pablo II Portal 13 1-C </p>
                                </div>
                                <hr style={div5} />
                                    <div>
                                        <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-clock">   </i>
                            </span>
                                            <p style={div8}><b> Hora del pedido </b></p>
                                            <p style={div10}> 19:30H </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={div13}>
                                        <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-shipping-fast">   </i>
                            </span>
                                            <p style={div10}><b> Nº pedido 19823719 </b></p>
                                        </div>

                                        <div className="columns is-mobile" style={div11}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Yakisoba </p>
                                            </div>
                                            <div className="column is-full-mobile">
                                                <p> 6,20€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths">
                                                <p> Uramaki de Salmón, 9 Unidades </p>
                                            </div>
                                            <div className="column">
                                                <p> 8,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <pS> Subtotal :</pS>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <p> Total : </p>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <p> Pagado por: </p>
                                                    <p> VISA </p>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="column" style={div7}>
                                <div>
                                    <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-map-marker-alt">   </i>
                            </span>
                                        <p style={div8}><b> Entrega en: </b></p>
                                    </div>
                                    <p style={div9}> Local </p>
                                </div>
                                <hr style={div5} />
                                    <div>
                                        <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-clock">   </i>
                            </span>
                                            <p style={div8}><b> Hora del pedido </b></p>
                                            <p style={div10}> 20:30H </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={div13}>
                                        <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-shipping-fast">   </i>
                            </span>
                                            <p style={div10}><b> Nº pedido 1346563719 </b></p>
                                        </div>

                                        <div className="columns is-mobile" style={div11}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Yakisoba </p>
                                            </div>
                                            <div className="column is-full-mobile">
                                                <p> 6,20€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths">
                                                <p> Uramaki de Salmón, 9 Unidades </p>
                                            </div>
                                            <div className="column">
                                                <p> 8,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <pS> Subtotal :</pS>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <p> Total : </p>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <p> Pagado por: </p>
                                                    <p> VISA </p>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="column" style={div7}>
                                <div>
                                    <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-map-marker-alt">   </i>
                            </span>
                                        <p style={div8}><b> Entrega en: </b></p>
                                    </div>
                                    <p style={div9}> Calle Doctor Alejandro Otero </p>
                                </div>
                                <hr style={div5} />
                                    <div>
                                        <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-clock">   </i>
                            </span>
                                            <p style={div8}><b> Hora del pedido </b></p>
                                            <p style={div10}> 20:50H </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={div13}>
                                        <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-shipping-fast">   </i>
                            </span>
                                            <p style={div10}><b> Nº pedido 16454419 </b></p>
                                        </div>

                                        <div className="columns is-mobile" style={div11}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Yakisoba </p>
                                            </div>
                                            <div className="column is-full-mobile">
                                                <p> 6,20€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths">
                                                <p> Uramaki de Salmón, 9 Unidades </p>
                                            </div>
                                            <div className="column">
                                                <p> 8,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <pS> Subtotal :</pS>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <p> Total : </p>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <p> Pagado por: </p>
                                                    <p> VISA </p>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="column" style={div7}>
                                <div>
                                    <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-map-marker-alt">   </i>
                            </span>
                                        <p style={div8}><b> Entrega en: </b></p>
                                    </div>
                                    <p style={div9}> Local </p>
                                </div>
                                <hr style={div5} />
                                    <div>
                                        <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-clock">   </i>
                            </span>
                                            <p style={div8}><b> Hora del pedido </b></p>
                                            <p style={div10}> 15:40H </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div style={div13}>
                                        <div className="has-icon-left">
                            <span className="icon is-small is-left" style={div8}>
                                <i className="fas fa-shipping-fast">   </i>
                            </span>
                                            <p style={div10}><b> Nº pedido 121823719 </b></p>
                                        </div>

                                        <div className="columns is-mobile" style={div11}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Yakisoba </p>
                                            </div>
                                            <div className="column is-full-mobile">
                                                <p> 6,20€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths">
                                                <p> Uramaki de Salmón, 9 Unidades </p>
                                            </div>
                                            <div className="column">
                                                <p> 8,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                        <div className="columns is-mobile" style={div12}>
                                            <div className="column is-four-fifths is-full-mobile">
                                                <p> Sushi y Hoso Maki variado, 14 piezas </p>
                                            </div>
                                            <div className="column">
                                                <p> 11,80€ </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <pS> Subtotal :</pS>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <p> Total : </p>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div style={div13}>
                                            <div className="columns is-mobile" style={div12}>
                                                <div className="column is-four-fifths is-full-mobile">
                                                    <p> Pagado por: </p>
                                                    <p> VISA </p>
                                                </div>
                                                <div className="column is-full-mobile">
                                                    <p> 26,80€ </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }

}

export default DeliveryPage;
