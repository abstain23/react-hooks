import React, { useState, useEffect, useCallback } from 'react'

// function onResize() {
//   const [size,]
// }

function useSize() {
  console.log('xsss')
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() => {
    console.log('onresize')
    setSize({
      width: document.documentElement.clientWidth,
     height: document.documentElement.clientHeight
    })
  },[])
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  },[onResize])
  return size
}

function Size() {

  const size = useSize()
  
  return(
  <div>{size.width}* {size.height}</div>
  )
}

export default Size