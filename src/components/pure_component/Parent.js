import React, { Component } from 'react'
import Divider from '../comp_divider/Divider'
import PureChild from './PureChild'
import RegChild from './RegChild'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Prince' 
        }
        console.log('')
        console.log('pure componenet demo')
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Prince'
            })
        }, 3000)
    }
    

    render() {
        console.log('--parent--')
        return (
            <div>
                <h3>Pure component demo</h3>
                <PureChild/>
                <RegChild/>
                <Divider/>
            </div>
        )
    }
}

export default Parent
