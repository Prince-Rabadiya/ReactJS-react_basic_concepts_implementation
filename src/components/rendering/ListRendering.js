import React from 'react'
import Divider from '../comp_divider/Divider'

export function ListRendering() {
    const list = [1, 2, 3, 4 ,5]
    const renderList = list.map((item, index) => <p key={/*it should be unique*/ index}>{item ** 2}</p>)
    // don't use index as a key when having sorting feature.
    
    return (
        <div>
            <p>list rendering</p>
            {renderList}
            <Divider/>
        </div>
    )
}
