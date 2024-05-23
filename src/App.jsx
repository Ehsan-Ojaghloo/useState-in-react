import React , {useState} from 'react'
import "./App.css"

function App() {

  const [number , setNumber] = useState(12)

  return (
    <div>

    number : {number}

      <button onClick={()=> setNumber(number => number + 1)}>Click</button>

    </div>
  )
}

export default App