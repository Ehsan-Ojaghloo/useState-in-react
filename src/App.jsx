import React , {useState} from 'react'
import "./App.css"

function App() {

  const [number , setNumber] = useState(12)

  function variable() {
    setNumber(number => number + 1)
  }

  return (
    <div>

    number : {number}

    <button onClick={variable}>Click</button>

    </div>
  )
}

export default App