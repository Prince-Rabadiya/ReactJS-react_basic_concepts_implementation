import React, { Component } from 'react'

class RegChild extends Component {
    render() {
        console.log('reg comp')
        return (
            <div>
                <p>regular component</p>
                {this.props.name}                
            </div>
        )
    }
}

export default RegChild
