
import React from 'react'

  
  async function fetchAPI(param) {
    var response = await fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + param + "&inputtype=textquery&fields=place_id&key=AIzaSyDWyPmNi8qLf7Viugiw1bBQaBDQOPdXvhY");
    var myJson = await response.json(); //extract JSON from the http response

    console.log(myJson)
    return a;
  }
  const userAction = async () => {
   
    // do something with myJson
  }
  
  export default class Maps2 extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          value: '',
          result: null
        };
      }

    //https://www.google.com/maps/embed/v1/place?q=place_id:ChIJi7xhMnjjQgwR7KNoB5Qs7KY&key=AIzaSyDWyPmNi8qLf7Viugiw1bBQaBDQOPdXvhY
  
    toggleButtonState = () => {
      let selectedWord =  this.state.value
   
      fetchAPI(selectedWord).then(result => {
        this.setState({ result });
        
      });
    };


    onChange = e => this.setState({ value: event.target.value });
    render() {
      return (
        <div>
           <input type="text" onChange={this.onChange} />

          <button onClick={this.toggleButtonState}> Click me </button>
          <div>{this.state.result}</div>

          <iframe
            src={this.state.value} allowFullScreen></iframe>
        </div>
      );
    }
  }