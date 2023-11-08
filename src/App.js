import './App.css';
import React, {Component} from 'react';
import Keypad from './components/keypad';
import Operations from './components/operations';
class App extends Component {
  state = {result: ""}

  onClick = button => {
    if(button === "=") {
      this.calculate();
    }

    else if(button === "C") {
      this.reset();
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var checkResult = '';
    if(this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    } 
    else {
      checkResult = this.state.result;
    }

    
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } 
    
  ;

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <Operations result={this.state.result} />
          <Keypad onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

export default App;
