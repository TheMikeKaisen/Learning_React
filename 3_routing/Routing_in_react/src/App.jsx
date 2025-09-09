import { useState } from "react";

function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  let render = () => {
    switch (currentPath) {
      case "/contacts":
        return <h1>Contacts Page</h1>
      case "/careers":
        return <h1>Careers Page</h1>
      default:
        return <h1>Home page</h1>


    }
  }

  return (
    <>
      <button onClick={() => {
        setCurrentPath("/home")
        window.history.pushState({}, "", "/home")
      }
      }>Home</button>
      <button onClick={() => {
        setCurrentPath("/contacts")
        window.history.pushState({}, "", "/contacts")
      }}>Contacts</button>
      <button onClick={() => {
        setCurrentPath("/careers")
       window.history.pushState({}, "", "/careers")
      }}>Careers</button>

      // you will have to call the function
      {render()}
    </>
  )
}

export default App
