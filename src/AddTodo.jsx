import {createTodo} from './Service'
import { useState, useEffect } from "react"

export default function AddTodo(props) 
{
    const [newTodo, setNewTodo] = useState({userId: props.userId, completed: false})
    const handleSubmit = async (e)=>
    {
        e.preventDefault()
        const status = await createTodo(newTodo)
    }
    return(
        <div>
             <form onSubmit={handleSubmit}>
            <label>Title <input onChange={e => setNewTodo({...newTodo, title: e.target.value})} /></label>
            <button>Add</button>
            </form>
            <button onClick={props.callback}>Cancel</button>
        </div>
    )
}