import { useState } from "react"
import {useDispatch} from "react-redux"
import { addtodo } from "../Slices/todoSlice";



export default function AddTodo(){

    const [input, setInput] = useState("");
    let dispatch = useDispatch();

    let addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addtodo(input));
        setInput("");

    }

    return (
        <>

            <form onSubmit={addTodoHandler}>

                <input value={input} type="text" onChange={(e)=>setInput(e.target.value)}></input>

                <button type="submit">Submit</button>

            </form>
        </>
    )
}