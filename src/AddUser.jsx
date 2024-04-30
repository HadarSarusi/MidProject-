import {createUser} from './Service'
import { useState, useEffect } from "react"

export default function AddUser(props) 
{
    const [newUser, setNewUser] = useState([])
    const handleSubmit = async (e)=>
    {
        e.preventDefault()
        const status = await createUser(newUser)
        console.log(status)
    }
    return(
        <div>
             <form onSubmit={handleSubmit}>
            <label>Name <input onChange={e => setNewUser({...newUser, name: e.target.value})} /></label><br/>
            <label>Email <input onChange={e => setNewUser({...newUser, email: e.target.value})} /></label><br/>
            <button>Add</button>
            </form>
            <button onClick={props.callback}>Cancel</button>
        </div>
    )
}