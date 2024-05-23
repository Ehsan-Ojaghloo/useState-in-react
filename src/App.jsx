import React , {useState , useRef , useEffect} from 'react'
import "./App.css"

function App() {

  const [number , setNumber] = useState(false)

  const showNumber = useRef()
  
  // function variable() {
  //   setNumber(number => number + 1)

  //   number >= 4 ? showNumber.current.style.color = 'red' : showNumber.current.style.color = 'green';

  //   if (number >= 4 && number <= 8) {
  //   showNumber.current.style.color = 'red'
  //   } else {
  //   showNumber.current.style.color = 'green'
  //   }
  // }

  // useEffect(()=> {
  //   // console.log(showNumber)
  // })


  return (
    <div>

    <p> You are a {number ? "admin" : "guest"}</p>

    <button onClick={()=> setNumber(!number)}> {number ? "Demote me" : "Promote me"} </button>

    </div>
  )
}

export default App