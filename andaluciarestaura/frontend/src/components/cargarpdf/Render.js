import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ReactDOM from 'react-dom';

const divElement = {
  position: 'absolute',
  left: '50%',
  marginLeft: '-165px',
};


class App extends Component {

  constructor(props) {
    super(props);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  }

  state = { numPages: null, pageNumber: 1, cif: window.django.cif_cliente };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <div className="columns is-centered ">
          <div className="column is-half">
            <div className="columns is-mobile ">
              <div className="column " >
                <div className="columns has-text-centered is-mobile">
                  {pageNumber > 1 ?
                    <div className="column ">
                      <button className="button is-small is-one-third-mobile" style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToPrevPage}>Anterior</button>
                    </div>
                    :
                    <div className="column ">
                      <button className="button is-small is-one-third-mobile" disabled style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToPrevPage}>Anterior</button>
                    </div>
                  }
                  <div className="column is-one-third-mobile ">
                    <p style={{ paddingTop: '6px' }}>
                      Página {pageNumber} de {numPages}
                    </p>
                  </div>
                  {pageNumber < numPages ?
                    <div className="column ">
                      <button className="button is-small is-one-third-mobile" style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToNextPage}>Siguiente</button>
                    </div>
                    :
                    <div className="column ">
                      <button className="button is-small is-one-third-mobile" disabled style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToNextPage}>Siguiente</button>
                    </div>
                  }
                </div>
              </div>
            </div>
            <div className="columns is-mobile">
              
              <div className="column is-half" style={divElement}>
                  
                    <Document
                      file={`/static/clientes/${this.state.cif}/free.pdf`}
                      onLoadSuccess={this.onDocumentLoadSuccess}
                      loading={"Cargando PDF..."}
                    >
                      <Page pageNumber={pageNumber}  scale={0.5} loading={"Cargando pagina..."} />
                    </Document>

              </div>
            </div>
            <div className="columns is-mobile" style={{marginTop: '420px'}}>
              <div className="column " >
                <div className="columns has-text-centered is-mobile">
                  {pageNumber > 1 ?
                    <div className="column is-one-third-mobile">
                      <button className="button is-small" style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToPrevPage}>Anterior</button>
                    </div>
                    :
                    <div className="column is-one-third-mobile">
                      <button className="button is-small" disabled style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToPrevPage}>Anterior</button>
                    </div>
                  }
                  <div className="column is-one-third-mobile">
                    <p style={{ paddingTop: '6px' }}>
                      Página {pageNumber} de {numPages}
                    </p>
                  </div>
                  {pageNumber < numPages ?
                    <div className="column is-one-third-mobile">
                      <button className="button is-small" style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToNextPage}>Siguiente</button>
                    </div>
                    :
                    <div className="column is-one-third-mobile">
                      <button className="button is-small" disabled style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToNextPage}>Siguiente</button>
                    </div>
                  }
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
