import React, {useContext} from 'react'
import {colorContext} from './context'

function Son2() {
  const color = useContext(colorContext)
  console.log(color)
  return (
    <div>
      <h2>Son2</h2>
      <hr/>
      {color}
    </div>
  )
}

export default Son2
