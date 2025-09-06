import { useEffect } from "react";
import { useState } from "react";


function App() {
  const [time, setTime] = useState(1);

  // This side is going to cause performance issues 
  // setInterval(() => {
  //   setTime(time+1)
  // }, 1000);

  // to solve the above problem , we can use useEffect hook
  // which let us deal with side effects beautifully

  useEffect(() => {
    console.log("setInterval Called")
    let interval = setInterval(() => {
      setTime(time + 1)
    }, 1000);

    return () => {clearInterval(interval)}
  }, [time])



  return (

    <div>
      {time}
    </div>

  )
}


export default App
