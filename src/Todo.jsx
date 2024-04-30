import { useState, useEffect } from 'react'
import { updateTodo } from './Service'
export default function Todo(props) 
{
    const [isShown, setIsShown] = useState(false)
    const [tempCompleted, setTempCompleted] = useState(props.todoData.completed)

    const todoCompleted = async() => {
        setTempCompleted(true)
        setIsShown(false)
        const newTodo = {...props.todoData, completed: "true"}
        await updateTodo(newTodo.id, newTodo)
    }

    useEffect(() => {
        if (tempCompleted) {
            setIsShown(false);
        } else {
            setIsShown(true);
        }
    }, [tempCompleted]);
    

    return(
        <div style={{border: '2px solid purple', padding: '10px', margin: '10px'}}
            key={props.todoData.id}>
            <label>Title: {props.todoData.title}</label> <br/>
            <label>Completed: {tempCompleted.toString()}</label> <br/>
            {isShown&&(<button onClick={todoCompleted}>
                Mark Completed
            </button>)}
        </div>
    )
}