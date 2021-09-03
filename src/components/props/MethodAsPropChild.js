import React from 'react'

export function MethodAsPropChild(props) {
    return (
        <div>
            <button onClick={() => props.sendAcknowledgement('Method prop received')}>Acknowledge Parent</button>     
        </div>
    )
}
