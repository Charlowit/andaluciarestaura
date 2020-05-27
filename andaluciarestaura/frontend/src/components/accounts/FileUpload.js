import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {

  state = {
    cif: "25735686C",
    pdf: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handlePDFChange = (e) => {
    this.setState({
      pdf: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    console.log("ENTRA EN EL SUBMIT")
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('pdf', this.state.pdf);
    form_data.append('cif', this.state.cif);
    let url = 'http://127.0.0.1:8000/api/auth/pdf';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='CIF' id='cif' value={this.state.cif} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="file"
                   id="pdf"
                   accept="application/pdf" onChange={this.handlePDFChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default FileUpload;
