import {createPost} from './Service'
import { useState, useEffect } from "react"

export default function AddPost(props) 
{
    const [newPost, setNewPost] = useState({userId: props.userId})
    const handleSubmit = async (e)=>
    {
        e.preventDefault()
        await createPost(newPost)
    }
    return(
        <div>
             <form onSubmit={handleSubmit}>
            <label>Title <input onChange={e => setNewPost({...newPost, title: e.target.value})} /></label><br/>
            <label>Body <input onChange={e => setNewPost({...newPost, body: e.target.value})} /></label>
            <button>Add</button>
            </form>
            <button onClick={props.callback}>Cancel</button>
        </div>
    )
}