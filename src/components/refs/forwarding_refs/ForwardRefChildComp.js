import React from 'react'

const ForwardRefChildComp = React.forwardRef((props, ref) => {
  return (
    <div>
      ForwardRefChildComp
      <input type='text' ref={ref}/>
    </div>
  )
})

export default ForwardRefChildComp