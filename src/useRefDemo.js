import React, {useRef, forwardRef} from 'react'


const Child = forwardRef((props, ref) => {
  return (
    <div ref={ref}>child</div>
  )
})

function UseRefDemo() {
  const ref = useRef(null)
  const click = () => {
    console.log(ref)
  }
  return (
    <div>
      <Child ref={ref} />
      <button onClick={click}>click</button>
    </div>
  )
}

export default UseRefDemo
