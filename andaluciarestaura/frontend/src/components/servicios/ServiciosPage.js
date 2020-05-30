import React, { Component, Fragment } from 'react';
const div1 = {
  maxWidth: '50%'
};
const div2 = {
  marginTop: '2%',
  minWidth: '50%'
};
const div3 = {
  marginTop: '2%'
};
const div4 = {
  marginTop: '1%',
  textAlign: 'center',
  maxWidth: '50%'
};
const div5 = {
  maxWidth: '60%',
  minWidth: '50%'
};
const div6 = {
  marginTop: '10%'
};
const div7 = {
  marginTop: '5%'
};
const div8 = {
  fontWeight: 'bold'
};
const div9 = {
  border: '1px solid green',
  width: '75%'
};
const div10 = {
  marginTop: '1%'
};
const div11 = {
  display: 'inline-block'
};
const div12 = {
  border: '1px solid orange',
  width: '75%'
}
const div13 = {
  border: '1px solid green',
  width: '75%'
};

export class ServiciosPage extends Component {


  render() {
    return (
      <Fragment>
        <section className="section">

          <div className="container">

            <div className="container">
              <div className="columns">
                <div className="column">
                  <form>
                    <div className="field">
                      <label className="label">Buscador de servicios</label>
                      <div className="control">
                        <input className="input" style={div1} type="text"
                          placeholder="Servicio" />
                      </div>
                    </div>
                  </form>
                  <label className="label" style={div3}>Buscador de servicios</label>
                  <div className="select" style={div1}>
                    <select>
                      <option>Servicio 1</option>
                      <option>Servicio 2</option>
                    </select>
                  </div>
                </div>
                <div className="column">
                  <div>
                    <button className="button is-success" style={div2}>Añadir el servicio</button>
                    <label className="label" style={div4}>Ó</label>
                    <button className="button is-warnings" style={div5}>Añadir un servicio
                    customizado
                                        </button>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="title" style={div6}> LISTADO DE SERVICIOS DISPONIBLES</h1>
            <div style={div7}>
              <div className="table">
                <p style={div8}>SERVICIOS GRATUITOS</p>
                <hr style={div9} />
                <div className="table-row">
                  <div className="table-cell has-icons-left" style={div10}>
                    <span className="icon is-small is-left is-inline">
                      <i className="fas fa-wifi">   </i>
                    </span>
                    <p style={{ marginLeft: '3px' }} className="is-inline"> Internet Wi-fi </p>
                  </div>
                  <div className="table-cell has-icons-left" style={div10}>
                    <span className="icon is-small is-left is-inline">
                      <i className="fas fa-lock">   </i>
                    </span>
                    <p style={{ marginLeft: '3px' }} className="is-inline"> Caja fuerte  </p>
                  </div>
                  <div className="table-cell has-icons-left" style={div10}>
                    <span className="icon is-small is-left is-inline">
                      <i className="fas fa-concierge-bell">   </i>
                    </span>
                    <p style={{ marginLeft: '3px' }} className="is-inline">      Puesto PC Recepcion  </p>
                  </div>
                  <div className="table-cell has-icons-left" style={div10}>
                    <span className="icon is-small is-left is-inline">
                      <i className="fas fa-suitcase">   </i>
                    </span>
                    <p style={{ marginLeft: '3px' }} className="is-inline">    Guarda Equipaje  </p>
                  </div>
                  <div className="table-cell has-icons-left" style={div10}>
                    <span className="icon is-small is-left is-inline">
                      <i className="fas fa-info-circle">   </i>
                    </span>
                    <p style={{ marginLeft: '3px' }} className="is-inline">           Información turistica  </p>
                  </div>
                </div>
              </div>
            </div>
            <hr style={div13} />
            <div style={div6}>
              <p style={div8}>SERVICIOS ADICIONALES</p>
              <hr style={div12} />
              <div className="table-row">
                <div className="table-cell has-icons-left" style={div10}>
                  <span className="icon is-small is-left">
                    <i className="fas fa-parking">   </i>
                  </span>
                  <p style={{ marginLeft: '3px' }} className="is-inline">       Parking subterraneo  </p>
                </div>
                <div className="table-cell has-icons-left" style={div10}>
                  <span className="icon is-small is-left">
                    <i className="fas fa-walking">   </i>
                  </span>
                  <p style={{ marginLeft: '3px' }} className="is-inline">        Servicio de habitaciones 24h  </p>
                </div>
                <div className="table-cell has-icons-left" style={div10}>
                  <span className="icon is-small is-left">
                    <i className="fas fa-tint">   </i>
                  </span>
                  <p style={{ marginLeft: '3px' }} className="is-inline">         Servicio lavanderia y tintoreria  </p>
                </div>
                <div className="table-cell has-icons-left" style={div10}>
                  <span className="icon is-small is-left">
                    <i className="fas fa-seedling">   </i>
                  </span>
                  <p style={{ marginLeft: '3px' }} className="is-inline">           Servicio de floristeria  </p>
                </div>
                <div className="table-cell has-icons-left" style={div10}>
                  <span className="icon is-small is-left">
                    <i className="fas fa-taxi">   </i>
                  </span>
                  <p style={{ marginLeft: '3px' }} className="is-inline">       Taxi 24h  </p>
                </div>
                <div className="table-cell has-icons-left" style={div10}>
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope">   </i>
                  </span>
                  <p style={{ marginLeft: '3px' }} className="is-inline">         Fax - Mensajería - Postal  </p>
                </div>
                <div className="table-cell has-icons-left" style={div10}>
                  <span className="icon is-small is-left" style={div11}>
                    <i className="fas fa-film">   </i>
                  </span>
                  <p style={{ marginLeft: '3px' }} className="is-inline">            <a href="#" style={div11}><p> Buscamos tus entradas para espectáculos y cine </p>
                  </a>  </p>
                </div>
              </div>
            </div>
            <hr style={div12} />
            <div style={div6}>
              <p style={div8}>SERVICIOS ADICIONALES</p>
              <hr style={div12} />
              <div className="table-row">
                <div className="table-cell">
                  <p style={{ marginLeft: '3px' }} className="is-inline">           Internet Wi-Fi  </p>
                </div>
                <div className="table-cell">
                  <p style={{ marginLeft: '3px' }} className="is-inline">       TV Plasma 19"  </p>
                </div>
                <div className="table-cell">
                  <p style={{ marginLeft: '3px' }} className="is-inline">         Climatización individual  </p>
                </div>
                <div className="table-cell">
                  <p style={{ marginLeft: '3px' }} className="is-inline">        Secador de pelo </p>
                </div>
                <div className="table-cell">
                  <p style={{ marginLeft: '3px' }} className="is-inline">       Baño completo </p>
                </div>
                <div className="table-cell">
                  <p style={{ marginLeft: '3px' }} className="is-inline">      Set acogida baño </p>
                </div>
                <div className="table-cell">
                  <p style={{ marginLeft: '3px' }} className="is-inline">       Suit dispone de hidromasaje </p>
                </div>
              </div>
            </div>
            <hr style={div12} />
          </div>
        </section>
      </Fragment>
    )
  }

}

export default ServiciosPage;
