import React , {useState , useRef , useEffect} from 'react'
import "./App.css"

function App() {

  const [number , setNumber] = useState(12)

  const showNumber = useRef()

  useEffect(()=> {
    console.log(showNumber)
  })

  function variable() {
    setNumber(number => number + 1)
  }

  return (
    <div>

    number : <span ref={showNumber}>{number}</span>

    <button onClick={variable}>Click</button>

    </div>
  )
}

export default App