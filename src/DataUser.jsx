import Todos from './Todos'
import AddTodo from './AddTodo'
import AddPost from './AddPost'
import Posts from './Posts'
import { useState, useEffect } from "react"

export default function DataUser(props) {
    const [isAddTodo, setIsAddTodo] = useState(false)
    const [isAddPost, setIsAddPost] = useState(false)
    const cancelTodo = ()=>
    {
        setIsAddTodo(false)
    }

    const cancelPost = ()=>
    {
        setIsAddPost(false)
    }

    return(
        <div>
             <label>Todos - User {props.userId}</label>
             {!isAddTodo && <button onClick={() => setIsAddTodo(true)}>Add</button>} 
             {isAddTodo?<AddTodo key={`addTodo_${props.userId}`} userId = {props.userId} callback ={cancelTodo}/>
             :(<Todos key={`todos_${props.userId}`} userId={props.userId} />)}             
            <label> Posts - User {props.userId}</label>
            {!isAddPost && <button onClick={() => setIsAddPost(true)}>Add</button>} 
            {isAddPost?<AddPost key={`addPost_${props.userId}`} userId = {props.userId} callback ={cancelPost}/>
             :(<Posts key={`posts_${props.userId}`} userId={props.userId} />)}  
        </div>
    )
}