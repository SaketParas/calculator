import React, { Component } from 'react'

class Keypad extends Component {
    handle_change = (e) => {
        this.props.buttonPressed(e.target.name);
    }
    render() {
        return (
            <div >
                <button name="1" onClick={this.handle_change}>1</button>
                <button name="2" onClick={this.handle_change}>2</button>
                <button name="3" onClick={this.handle_change}>3</button><br/>
                <button name="4" onClick={this.handle_change}>4</button>
                <button name="5" onClick={this.handle_change}>5</button>
                <button name="6" onClick={this.handle_change}>6</button><br/>
                <button name="7" onClick={this.handle_change}>7</button>
                <button name="8" onClick={this.handle_change}>8</button>
                <button name="9" onClick={this.handle_change}>9</button><br/>
                <button name="0" onClick={this.handle_change}>0</button>
                <button name="+" onClick={this.handle_change}>+</button>
                <button name="-" onClick={this.handle_change}>-</button><br/>
                <button name="*" onClick={this.handle_change}>*</button>
                <button name="/" onClick={this.handle_change}>/</button>
                <button name="=" onClick={this.handle_change}>=</button>
            </div>
        )
    }
}

export default Keypad
