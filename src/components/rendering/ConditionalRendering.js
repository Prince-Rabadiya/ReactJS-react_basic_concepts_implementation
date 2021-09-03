import React, { Component } from 'react'
import Divider from '../comp_divider/Divider'

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isTrue: true
        }
    }
    

    render() {
        let header = this.state.isTrue && <span>conditional rendering</span>

        return this.state.isTrue ? (
        <div>
        <p>{header}: true</p>
        <Divider/>
        </div>
        ) : (
        <div>
        <p>false</p>
        <Divider/>
        </div>
        )

        // let returnVal
        // if (this.state.isTrue)
        //     returnVal = <p>conditional rendering: true</p>    
        // else
        //     returnVal = <p>conditional rendering: false</p>
        // return returnVal

        // if (this.state.isTrue)
        //     return <p>conditional rendering: true</p>    
        // else
        //     return <p>conditional rendering: false</p>
    }
}
