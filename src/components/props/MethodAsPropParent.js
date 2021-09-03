import React, { Component } from 'react'
import Divider from '../comp_divider/Divider'
import { MethodAsPropChild } from './MethodAsPropChild'

export class MethodAsPropParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            greet: 'I am the Parent!'
        }
    }
    
    
    receiveAcknowledgement = (receivedMsg) => {
        alert(`Alert from parent '${this.state.greet}'. \nMsg from child '${receivedMsg}'.`)
    }
    
    render() {
        return (
            <div>
                <MethodAsPropChild sendAcknowledgement={this.receiveAcknowledgement}></MethodAsPropChild>
                <Divider/>
            </div>
        )
    }
}
