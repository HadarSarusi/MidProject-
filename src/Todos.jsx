import { useState, useEffect } from 'react'
import { getUserTodos, updateTodo } from './Service'
import Todo from './Todo'

export default function Todos(props) 
{
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        fetchTodos();
    }, [])

    const fetchTodos = async () => 
    {
        const titles = await getUserTodos(props.userId)
        setTodos(titles)
    }
 

    return(
        <div style = {{border: '2px solid black'}}>
            {todos.map(todo => <Todo key={todo.id}   todoData={todo} />).slice(0,3)}
        </div>
    )
    
}