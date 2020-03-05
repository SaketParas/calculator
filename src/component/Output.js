import React, { Component } from 'react'

class Output extends Component {
    render() {
        return (
            <div>
                <p class="display">{this.props.result}</p>
            </div>
        )
    }
}

export default Output
