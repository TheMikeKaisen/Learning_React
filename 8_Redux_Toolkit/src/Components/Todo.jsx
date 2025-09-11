import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../Slices/todoSlice"



export function Todo(){

    let mytodos = useSelector(state => state.todos)
    let dispatch = useDispatch();

    let removeTask = (id) => {
        dispatch(removeTodo(id))
    }

    return (<>
        <div>
            {mytodos.map(todo => (
                <li key={todo.id} 
                    style={
                    { 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        padding: "8px" 
                    }
                }>
                    
                   <span style={{ marginRight: "10px" }}>
                    
                        {todo.task}
                    
                    </span>

                    <button onClick={()=>removeTask(todo.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </div>
    </>)
}