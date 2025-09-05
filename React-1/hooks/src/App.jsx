import { useState } from "react"

function App() {

  return (
    <>
    <ToggleButton />
    <br />
    <ToggleButton2/>
    </>
  )
}

function ToggleButton(){
  // use state to set the initial state of isVisible
  // here isVisible is a state variable.
  const [isVisible, setIsVisible] = useState(false);

  return(
    <>
    <button onClick={()=> setIsVisible(!isVisible)}>
      Toggle Message
    </button>

    {/* // conditional rendering */}
    { isVisible && <div>
      This is a conditionally rendered message using useState!
    </div>}
    </>
    )
}


// PROBLEM WITH THE BELOW APPROACH: IT WON'T RUN LIKE YOU EXPECT
// React says, i'll do dynamic conditional rendering(where the variable used for checking the condition can be changed)
// only if the stated variable is a STATE VARIABLE
// if it is a simple variable( like defined below ) react will conditionally render using the initial value of the used variable
// IT WILL NOT RERENDER IF THE VALUE OF SIMPLE VARIABLE IS CHANGED
function ToggleButton2(){
  // a simple variable(not a state variable)
  let isVisible = true; // always return the message
  // let isVisible = false; // never return the message

  function toggle(){
    isVisible = !isVisible;
  }

  return(
    <>
    <button onClick={()=> toggle()}>
      Toggle Message 2
    </button>

    {/* // conditional rendering */}
    { isVisible && <div>
      This is a conditionally rendered message using useState!
    </div>}
    </>
    )
}

export default App
