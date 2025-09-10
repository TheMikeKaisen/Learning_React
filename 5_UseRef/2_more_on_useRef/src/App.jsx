// in this stopwatch kind of project, i am going to point out the differences between raw variables, state variables and useRef variables.
// this will make you understand why raw variables is a no no inside a component.

import {useState} from "react"

function App(){
  
  const [counter, setCounter] = useState(0);
  

  function startCounter (){
    setInterval(() => {
      // setCounter(counter+1) // This wont run because of present of closue to the value of counter = 0
      setCounter(c => c+ 1)
    }, 1000);
  }
  return (
    <>
      {counter}
      <br />
      <br />
      <button onClick={()=> startCounter()}>Start</button>
      <br />
      <br />
      <button>Stop</button>

    </>
  )
}

export default App