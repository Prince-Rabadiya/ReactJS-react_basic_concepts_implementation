import React, { Component } from 'react'
import Divider from '../comp_divider/Divider'
import { LCD } from './LCD'

export class LCC extends Component {
    // going through mounting phase
    constructor(props) {
        super(props)
    
        this.state = {
            msg: 'pre'
        }
        console.log('')
        console.log('life cycle update methods:')
        console.log('LCC constructor')
    }

    static getDerivedStateFromProps(props, state){
        //rarely used life cycle method
        console.log('LCC getDerived')
        return null
    }

    getSnapshotBeforeUpdate(prevProp, prevState){
        //rarely used life cycle method
        console.log('LCC getSnapshotBeforeUpdate')
        return true
    }

    componentDidUpdate(){
        console.log('LCC componentDidUpdate')
    }

    clickEvent = () => {
        this.setState({
            msg: 'post'
        })
    }
    
    render() {
        console.log('LCC render')
        return (
            <div>
                LCC
                <LCD/>
                <button onClick={this.clickEvent}>Change State</button>
                <Divider/>
            </div>
        )
    }
}
