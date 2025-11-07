import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const click= () => {
    setCount(count => count +1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={click}></button>
    </div>
  )
}

export default App
