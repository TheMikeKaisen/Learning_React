import { useState } from "react";





export default function App(){
  const [torch, setTorch] = useState(false);

  return (

    <>
      <LightBulb torch={torch} setTorch={setTorch}/>
    </>
  )
}

// LightBulb component in itself, is doing nothing with torch and setTorch state variables.
// they are just being used to passed on to another component as props.
// in a complex application, this passing of props from component to component can go deep through various stages/levels
// this is called PROP DRILLING
function LightBulb({torch, setTorch}) {
  return (
    <>
      <BulbLight torch= {torch}/>
      <br />
      <ToggleLight setTorch={setTorch} />
    </>
  )
}

// component - 1
function BulbLight({torch}){

  // if i were to use this state variable, then i cannot access it inside ToggleLight Component
  // so, WE CAN ROLLUP this state variable to the lowest common ancestor(LightBulb)
  // const [torch, setTorch] = useState(false);
  return (
    <>
      {torch ? "Bulb on" : "Bulb off"}
      
    </>
  )
}

// component - 2
function ToggleLight({setTorch}) {

  function toggle(){
    setTorch(torch => !torch)
  }

  return (
    <>
      <button onClick={() => toggle()}>Toggle</button>
    </>
  )
}