import React, { Component } from 'react'

class TodoHeader extends Component {

    render() {
        return (
            <div>
                <h1 style={{'fontSize':'70px'}}>{this.props.title}</h1>
            </div>
        )
    }
}

export default TodoHeader
