import React, { Component, Fragment } from 'react';
const div1 = {
    width:'75%'
};
const div2 = {
    marginTop: '4%'
};
const div3 = {
    marginTop: '2%'
};
const div4 = {
    textAlign:'right'
};
const div5 = {
    marginLeft: '0%',
    marginTop: '0%',
    border: '2px solid orange',
    width:'75%',
    heigth: '200px'
};
const div6 = {
    border: '2px solid orange',
    width:'100%',
    heigth: '100%'
};
const div7 = {
    width: '75%',
    height: '100%',
    display: 'inline-block'
};
const div8 = {
    display: 'inline-block'
};
const div9 = {
    marginLeft: '0%'
};
const div10 = {
    marginTop: '1%'
};
const div11 = {
    display: 'inline-block',
     textAlign:'right'
};
const div12 = {
    marginTop:'7%',
    marginLeft: '0%'
};
const div13 = {
    marginBottom:'10%',
    marginLeft: '0%',
    marginRight: '5%'
};
const div14 = {
    marginTop: '1%',
    marginBottom: '1%',
    height: '25%',
    marginLeft: '5%'
};
const div15 = {
    width: '100%',
    height:'100%'
};
const div16 = {
    marginTop: '2%',
    marginLeft: '8%'
};
const div17 = {
    marginTop: '10%'
};

export class ReservasPage extends Component {


    render(){
        return(
            <Fragment>
                  <section class="section">
                    <div class="container">
                        <div class="columns" >
                          <div class="column">
                            <h1 class="title">LISTADO DE RESERVAS</h1>
                          </div>
                          <div class="column">
                            <div class="select">
                              <select>
                                <option>25/05/2020 - 26/05/2020</option>
                                <option>26/05/2020 - 27/05/2020</option>
                                <option>27/05/2020 - 28/05/2020</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <hr style={div1} />

                        <div class="table" style={div2}>
                            <div class="table-row">
                                <div class="columns" style={div1}>
                                    <div class="column is-four-fifths is-three-quarters-mobile">
                                        <p> <b> Reserva 32487</b> </p>
                                        <div style={div3}>
                                            <span class="icon is-small is-left">
                                              <i class="fas fa-user-circle">   </i>
                                            </span>
                                            Alejandro Nieto
                                        </div>
                                    </div>
                                    <div class="column is-three-quarters-mobile" style={div4}>
                                        <p> <b> Mesa </b> </p>
                                        <div class="select">
                                          <select>
                                            <option>T14</option>
                                            <option>T24</option>
                                            <option>T67</option>
                                          </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="columns" style={div5}>
                                    <div style={div6}>
                                        <div class="column is-four-fifths is-three-quarters-mobile" style={div8}>
                                            <div class="columns">
                                                <div class="column is-one-third is-four-fifths-mobile" style={div9}>
                                                    <div style={div7}>
                                                        <p style={div2}> <b> Fecha y hora </b></p>
                                                        <div>
                                                            <div class="has-icons-left" style={div14}>

                                                                <div style={div10}>
                                                                    <span class="icon is-small is-left">
                                                                      <i class="fas fa-calendar-alt">   </i>
                                                                    </span>
                                                                    25/05/2020
                                                                </div>

                                                                <div style={div10}>
                                                                    <span class="icon is-small is-left">
                                                                      <i class="fas fa-hourglass-start">   </i>
                                                                    </span>
                                                                    19:00
                                                                </div>

                                                                <div style={div10}>
                                                                    <span class="icon is-small is-left">
                                                                      <i class="fas fa-hourglass-end">   </i>
                                                                    </span>
                                                                    22:00
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="column is-four-fifths-mobile" style={div9}>
                                                    <div style={div15}>
                                                        <p style={div2}> <b> Nº Personas </b>  </p>
                                                        <div style={div16}>
                                                            <div class="table-cell has-icons-left" style={div10}>
                                                                <div>
                                                                    <span class="icon is-small is-left">
                                                                      <i class="fas fa-user">   </i>
                                                                    </span>
                                                                    4
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="column is-three-quarters-mobile" style={div9}>
                                                    <div style={div15}>
                                                        <p style={div2}>  <b> Teléfono </b>  </p>
                                                        <div style={div16}>
                                                            <div class="table-cell has-icons-left" style={div10}>
                                                                <span class="icon is-small is-left">
                                                                  <i class="fas fa-phone">   </i>
                                                                </span>
                                                                661353289
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column is-three-quarters-mobile"  style={div11}>
                                            <div >
                                                <div>
                                                <button class="button is-success" style={div12}>Confirmar reserva</button>
                                                </div>
                                                <div style={div7}>
                                                <button class="button is-danger" style={div13}>Cancelar reserva</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr style={div1} />

                        <div class="table" style={div2}>
                            <div class="table-row">
                                <div class="columns" style={div1}>
                                    <div class="column is-four-fifths is-three-quarters-mobile">
                                        <p> <b> Reserva 32187</b> </p>
                                        <div style={div3}>
                                            <span class="icon is-small is-left">
                                              <i class="fas fa-user-circle">   </i>
                                            </span>
                                            Carlos Gálvez
                                        </div>
                                    </div>
                                    <div class="column is-three-quarters-mobile" style={div4}>
                                        <p> <b> Mesa </b> </p>
                                        <div class="select">
                                          <select>
                                            <option>T14</option>
                                            <option>T24</option>
                                            <option>T67</option>
                                          </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="columns" style={div5}>
                                    <div style={div6}>
                                        <div class="column is-four-fifths is-three-quarters-mobile" style={div8}>
                                            <div class="columns">
                                                <div class="column is-one-third is-four-fifths-mobile" style={div9}>
                                                    <div style={div7}>
                                                        <p style={div2}> <b> Fecha y hora </b></p>
                                                        <div>
                                                            <div class="has-icons-left" style={div14}>

                                                                <div style={div10}>
                                                                    <span class="icon is-small is-left">
                                                                      <i class="fas fa-calendar-alt">   </i>
                                                                    </span>
                                                                    30/05/2020
                                                                </div>

                                                                <div style={div10}>
                                                                    <span class="icon is-small is-left">
                                                                      <i class="fas fa-hourglass-start">   </i>
                                                                    </span>
                                                                    11:00
                                                                </div>

                                                                <div style={div10}>
                                                                    <span class="icon is-small is-left">
                                                                      <i class="fas fa-hourglass-end">   </i>
                                                                    </span>
                                                                    15:00
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="column is-four-fifths-mobile" style={div9}>
                                                    <div style={div15}>
                                                        <p style={div2}> <b> Nº Personas </b>  </p>
                                                        <div style={div16}>
                                                            <div class="table-cell has-icons-left" style={div10}>
                                                                <div>
                                                                    <span class="icon is-small is-left">
                                                                      <i class="fas fa-user">   </i>
                                                                    </span>
                                                                    8
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="column is-three-quarters-mobile" style={div9}>
                                                    <div style={div15}>
                                                        <p style={div2}>  <b> Teléfono </b>  </p>
                                                        <div style={div16}>
                                                            <div class="table-cell has-icons-left" style={div10}>
                                                                <span class="icon is-small is-left">
                                                                  <i class="fas fa-phone">   </i>
                                                                </span>
                                                                696696969
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column is-three-quarters-mobile"  style={div11}>
                                            <div >
                                                <div>
                                                <button class="button is-success" style={div12}>Confirmar reserva</button>
                                                </div>
                                                <div style={div7}>
                                                <button class="button is-danger" style={div13}>Cancelar reserva</button>
                                                </div>
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

export default ReservasPage;
