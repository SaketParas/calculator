import React, {Component} from 'react';
import './App.css';
import Keypad from './component/Keypad';
import Output from './component/Output';
import SomeListComponent from './component/New'

class App extends Component {
  state = {
    result:''
  }
  buttonPressed = (e) => {
    if(e === '='){
      this.calculate()
    }
    else
    this.setState({
      result:this.state.result + e
    }); 
  }
  calculate = () => {
    this.setState({
      result:eval(this.state.result)
    })
  }
  render(){
    return(
      <div className="App">
        <SomeListComponent />
        <Output result = {this.state.result}/>
        <Keypad buttonPressed={this.buttonPressed}/>
      </div>
    )
  }
}
export default App;
