import React from 'react'
import { UserContextConsumer } from './userContext'
import Divider from '../comp_divider/Divider'

function ContextDemo3() {
  return (
    <div>
      <UserContextConsumer>
        {username => {
          return <p>Hello {username}</p>
        }}
      </UserContextConsumer>
      <Divider/>
    </div>
  )
}

export default ContextDemo3