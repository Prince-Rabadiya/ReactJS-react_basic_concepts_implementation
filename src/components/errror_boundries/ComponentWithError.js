import React from 'react'

function ComponentWithError(props) {
  if (props.name === 'wrong') 
    throw new Error('Invalid name!!!')

  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

export default ComponentWithError