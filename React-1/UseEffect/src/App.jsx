import { useState } from "react";


function App(){
  const [time, setTime] = useState(1);

  // This side is going to cause performance issues 
  setInterval(() => {
    setTime(time+1)
  }, 1000);

  return(
  
  <div>
    {time}
  </div>
  
)
}


export default App
