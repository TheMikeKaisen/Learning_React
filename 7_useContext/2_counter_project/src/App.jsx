import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"

let CounterContext = createContext()

export default function App() {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <CounterContext.Provider value={{counter, setCounter}}>
        {counter}
        <br /><br /><br />
        <IncreaseButton />
        <br /><br /><br />
        <DecreaseButton />
      </CounterContext.Provider>
    </>
  )
}


function IncreaseButton() {
  let {setCounter} = useContext(CounterContext);

  function increaseCount(){
    setCounter(c => c+1);
  }
  return (
    <>
      <div>
        <button onClick={() => increaseCount()}>
          Increase
        </button>
      </div>
    </>
  )
}
function DecreaseButton() {
  let {setCounter} = useContext(CounterContext);

  function decreaseCount(){
    setCounter(c => c-1);
  }
  return (
    <>
      <div>
        <button onClick={() => decreaseCount()}>
          Decrease
        </button>
      </div>
    </>
  )
}