import React, { Component } from "react";
import { Document, Page, pdfjs  } from "react-pdf";
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props){
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
        <div className="columns is-centered">
            <div className="column">
                <div className="columns is-centered">
                        {pageNumber > 1 ?
                            <div className="column is-1">
                                <button className="button is-small" style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToPrevPage}>Anterior</button>
                            </div>
                            : ""
                        }
                        <div className="column is-1">
                          <p style={{paddingTop:'6px'}}>
                          Página {pageNumber} de {numPages}
                          </p>
                        </div>
                      {pageNumber < numPages ?
                        <div className="column is-1">
                        <button className="button is-small" style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToNextPage}>Siguiente</button>
                        </div>
                         :
                          ""
                      }
                </div>
                <div style={{marginLeft:'17%'}}>
                  <Document
                    file =  {`/static/clientes/${this.state.cif}/free.pdf`}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    loading={"Cargando PDF..."}
                  >
                    <Page pageNumber={pageNumber} scale={0.50} loading={"Cargando pagina..."}  />
                  </Document>
                </div>
                <div className="columns is-centered">
                        {pageNumber > 1 ?
                            <div className="column is-1">
                                <button className="button is-small" style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToPrevPage}>Anterior</button>
                            </div>
                            : ""
                        }
                        <div className="column is-1">
                          <p style={{paddingTop:'6px'}}>
                          Página {pageNumber} de {numPages}
                          </p>
                        </div>
                      {pageNumber < numPages ?
                        <div className="column is-1">
                        <button className="button is-small" style={{ backgroundColor: '#bca466', color: 'white', display: 'inline' }} onClick={this.goToNextPage}>Siguiente</button>
                        </div>
                         :
                          ""
                      }
                </div>

            </div>
        </div>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
