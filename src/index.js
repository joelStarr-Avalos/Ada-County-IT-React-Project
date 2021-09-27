import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';

class ReverseString extends React.Component {
  render (props) {
    return  (
     <div>
       <p> {this.props.string} = {this.reverseString(this.props.string)} </p>
     </div>
    )
  }
    reverseString(string) {
    let reverse = '';
    for (let i = string.length - 1; i >= 0; i--) {
      reverse = reverse.concat(string.substr(i,1));
    }
    return reverse;
  }
}

class Count extends React.Component {
  render () {
    return (
      <div>
        <p> {this.props.string} = {this.props.string.length}</p>
      </div>
    );
  }
}

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mode : "Reverse",
        curString : "Enter Text"
      }
      this.handleInput = this.handleInput.bind(this);
      this.handleMode = this.handleMode.bind(this);
      this.SelectMode = this.SelectMode.bind(this);
    }

    handleInput(event) {
      this.setState({curString : event.target.value});
    }
    
    handleMode(event) {
      this.setState({mode : event.target.value});
    }
    SelectMode() {
      if (this.state.mode == "Reverse") {
        return (<ReverseString string = {this.state.curString}/>);
        }
      else  
        return <Count string = {this.state.curString}/>;
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Select Mode
            </p>
            <div className="Mode Select" onChange = {this.handleMode}>
              <input type="radio" value="Reverse" name="mode" defaultChecked /> Reverse Text
              <input type="radio" value="Count" name="mode" /> Count Characters
            </div>
            <input 
              type="text" 
              id = "input"
              value = {this.state.curString}
              onChange = {this.handleInput}
            /> 
            <this.SelectMode />
            {/* <Count 
            string = {this.state.curString}
            /> 
            <ReverseString
            string = {this.state.curString}/> */}

          </header>
        </div>
      );
    }
  }


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
