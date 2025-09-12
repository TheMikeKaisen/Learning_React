// step 1 : npm i recoil
// you would notice that by using recoil state management library, only the updated component is re-rendered.
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";


// atom is just like using const [count, setCount] = useState(0)
// its just that, it takes a unique key. (KEY SHALL ALWAYS BE UNIQUE);
// This is what would act like a GLOBAL STORE
let count = atom({
  key: "counterState",
  default: 0
})


export default function App(){
  

  return (
    // RecoilRoot is the wrapper functoin like ContextProvider
    // though you don't have to pass on any value into this though.
    <RecoilRoot>
      <Value />
      <IncreaseeButton />
      <DecreaseButton />
    </RecoilRoot>
  )
}
function Value() {
  // to ACCESS the value of a global state variabe, use useRecoilValue(globalStoreName)
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

function DecreaseButton(){
  // to update the value into the global state variable use useSetRecoilState(globalStoreName)
  let setCounter = useSetRecoilState(count);
  function decrease(){
    setCounter(c => c - 1)
  }
  return (
    <>
      <div>
        <button onClick={() => decrease()}> Decrease Counter </button>
      </div>
    </>
  )
}

function IncreaseeButton(){
  let setCounter = useSetRecoilState(count);
  function increase(){
    setCounter(c => c+1);
  }
  return (
    <>
      <div>
        <button onClick={() => increase()}> Increase Counter </button>
      </div>
    </>
  )
}
