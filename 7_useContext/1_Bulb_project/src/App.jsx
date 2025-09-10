import { createContext } from "react";
import { useContext, useState } from "react";


// Achieving the result i got back from the prop drillign WITHOUT using prop drilling
// here, i will be using Context api to avoid prop drilling and make the state variables to be available globally
// This is basically done in 3 steps:
// 1. creating the context (YOU CANNOT CREATE A CONTEXT INSIDE OF A FUNCTION) by using createContext
// 2. by wrapping the component with context provider (to make sure that only the wrapped conponent would have access to the global state variables)
// 3. by consuming the context state variables by using useState hook 


// step - 1:: creating the context
let BulbContext = createContext();

export default function App(){
  const [torch, setTorch] = useState(false);
  return (

    <>
      {/* step 2 - wrapping the component with context provider */}
      <BulbContext.Provider value={{
        torch:torch,
        setTorch:setTorch
      }}>
        <LightBulb />
      </BulbContext.Provider>
    </>
  )
}

function LightBulb() {
  return (
    <>
      <BulbLight/>
      <br />
      <ToggleLight/>
    </>
  )
}

// component - 1
function BulbLight(){
  // step - 3: consuming the context state variables without prop drilling.
  let {torch} = useContext(BulbContext);
  return (
    <>
      {torch ? "Bulb on" : "Bulb off"}
      
    </>
  )
}

// component - 2
function ToggleLight() {

  let {setTorch} = useContext(BulbContext);
  function toggle(){
    setTorch(torch => !torch)
    // setTorch(!torch)
  }

  return (
    <>
      <button onClick={() => toggle()}>Toggle</button>
    </>
  )
}