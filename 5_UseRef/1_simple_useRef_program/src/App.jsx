// i am trying to build a program where there would be two input fields and a submit button
// whenever i try to click the submit button, my cursor should automatically focus on the text input
// first i will try to build it by using dom manipulation
// then i will create another project to do the same task using useRef

import { useRef } from "react"





function App(){


  // the problem with this approach is that, if more that one element has the same id, then 
  // it react would be confused on which one to focus on
  // function focus(){
  //   document.getElementById("name").focus()
  // }

  // using useRef
  const inputRef = useRef();
  function focus(){
    inputRef.current.focus();
  }

  return (
    <>
      <div>
        SignUp
        <input id="name" type="text"></input>
      </div>
      <br />
      <div>
        Password
        <input ref={inputRef} id="name" type="text"></input>
      </div>
      <br />
      <button onClick={()=>focus()}>
        Submit
      </button>
    </>
  )
}


export default App