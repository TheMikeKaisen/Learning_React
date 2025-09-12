
import React from "react"
import {atom, useSetRecoilState, useRecoilValue, RecoilRoot, selector} from "recoil"

let counterAtom = atom({
  key: "counterAtom", 
  default: 0
})

let isEvenSelector = selector({
  key:"isEvenSelector",
  get: ({get}) => {
    let currentCount = get(counterAtom)
    let isEven = (currentCount%2 == 0 );
    return isEven;
  }
})


export default function App(){

  return (

    <RecoilRoot>
      <Buttons />
      <br /><br />
      <Counter />
      <br /><br />
      <IsEven />
    </RecoilRoot>
  )
}

function Buttons(){
  let setCounter = useSetRecoilState(counterAtom);

  function increase(){
    setCounter(c => c + 2);
  }
  function decrease(){
    setCounter(c => c - 1);
  }
  return (
    <>
      <button onClick={()=>increase()}>Increase by 2</button>
      <button onClick={()=>decrease()}>Decrease by 1</button>
    </>
  )
}

function Counter(){
  let counter = useRecoilValue(counterAtom);
  return (
    <>
      {counter}
    </>
  )
}

function IsEven(){
  let counter = useRecoilValue(isEvenSelector)
  
  return (
    <>
      {counter ? "Even": "Odd"}
    </>
  )
}