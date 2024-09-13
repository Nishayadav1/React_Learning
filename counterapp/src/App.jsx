import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let addCount=()=>{
    setCount(count+1)
  }
 
  let remove=()=>{
    setCount(0)
  } 

  return (
    <>
      <h1>Counter App</h1>
      <h2>counter value: {count}</h2>
      <button onClick={addCount}> add btn</button>
      <button onClick={remove}> remove btn</button>
    </>
  )
}

export default App
