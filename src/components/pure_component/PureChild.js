import React, { PureComponent } from 'react'

class PureChild extends PureComponent {
    // Used to prevent unnecessary renders on state or prop update. Pure component uses sc(shallow comparison(===))
    render() {
        console.log('pure comp')
        return (
            <div>
                <p>pure component</p>
                {this.props.name}            
            </div>
        )
    }
}

export default PureChild
