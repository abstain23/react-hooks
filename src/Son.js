import React, {useEffect, useCallback} from 'react'
import Son2 from './Son2'
function Son() {
  useEffect(() => {
    console.log('son effect ---kong')
  })
  useEffect(() => {
    console.log('son effect ---空数组')
    return () => {
      console.log('like willUnMount')
    }
  },[])
  const xx = useCallback(() => {
    console.log('son calll')
  },[])
  return (
    <div>
      son11---
      <hr/>
      <Son2/>
    </div>
  )
}

export default Son
