import { useState, useEffect } from "react"
import { getUserTodos, updateUser,deleteUser } from './Service'

export default function User(props) { // props={userData: {id: 1, name: "Leanne Graham", email: "}
    const[completed, setCompleted] = useState(false)
    const[todos, setTodos] = useState([])
    const [isShown, setIsShown] = useState(false)
    const[newUser, setNewUser] = useState(props.userData)//the new user that we want to update
    const [isClicked, setIsClicked] = useState(false)
    
    useEffect(()=>{
        fetchTodos();
       }, [])

    useEffect(()=>{
        setCompleted(todos.every(todo => todo.completed))
    }, [todos])

    const fetchTodos = async () => 
    {
        const titles = await getUserTodos(props.userData.id)
        setTodos(titles)
    }

    const handleSubmit = async (e)=>
    {
        e.preventDefault()
        await updateUser(props.userData.id, newUser)
    }

    const deleteUserById = async(e)=>
    {
        await deleteUser(props.userData.id)
        props.callback1(props.userData.id)
    }

    const handleClick = ()=>
    {
        setIsClicked(true)
        props.callback2(props.userData.id)
    }
    
    return (
        <div>
        <div
        style={ {border:completed ? '2px solid green' : '2px solid red', marginBottom: '10px'
        ,background: isClicked ? 'orange' : 'white',}}
        key={props.userData.id}>
        <form onSubmit={handleSubmit}>
        <label onClick={handleClick}>ID: <span> {props.userData.id} </span> </label><br />
        <label>Name: <input defaultValue = {props.userData.name} onChange={e => setNewUser({...newUser, name: e.target.value})} /> </label><br />
        <label>Email: <input defaultValue = {props.userData.email}  onChange={e => setNewUser({...newUser, email: e.target.value})}  /> </label><br />
        <button>Update</button>
        </form>
        <button onClick={deleteUserById}>Delete</button>
        <button 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
          Other Data
        </button >
        {isShown && (
          <div>
            Street: <span>{props.userData.street}</span><br />
            City: <span>{props.userData.city}</span><br />
            Zip Code: <span>{props.userData.zipCode}</span><br />
          </div>
        )} <br />
      </div>
      </div>
    )
}
