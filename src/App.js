import React,{useState, useEffect, useReducer, useCallback} from 'react'
import Son from './Son'

import {colorContext} from './context'
import reducer from './reducer'
import Size from './useWinsize'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [showSon, setShowSon] = useState(true)

  const [state, dispatch] = useReducer(reducer, {count:1})
  // console.log(state)
  useEffect(() => {
    console.log('effect')
  }, [count])

  useEffect(() => {
    console.log('effect2')
  }, [count2])

  useEffect(() => {
    console.log('effect all')
  })

  useEffect(() => { //useEffect 中传递了一个空数组[]，这种情况下只有在组件初始化或销毁的时候才会触发，用来代替 componentDidMount 和 componentWillUnmount
    console.log('effect kong')
  },[])
  const handleCall = useCallback(() => {
    console.log('xxx')
  }, [])
  return (
    <div>
      {count} <br/>
      <button onClick={() => setCount2(pre => pre + 1)}>+1</button>
      <hr/>
      <button onClick={() => {setShowSon(pre => !pre)}}>show son</button>
      
      <colorContext.Provider value='red'>
        {showSon && <Son/>}
        <hr/>
      </colorContext.Provider>
      <p>
        reducer === {state.count}
        <button onClick={() => {dispatch({type:'add'})}}>+1</button>
      </p>
      <p>
        <button onClick={handleCall}>usecallback</button>
      </p>
        <Size/>
    </div>
  )
}

export default App
