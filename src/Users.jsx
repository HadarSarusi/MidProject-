import { useState, useEffect } from 'react'
import { getUsers } from './Service'
import User from './User'
import AddUser from './AddUser'

export default function Users(props) {
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState("")
    const [isAddUser, setIsAddUser ] = useState(false)

    const fetchUsers = async () => {
        const finalUsers = await getUsers()
        setUsers(finalUsers)
    }

   const filterUsers = users.filter(user => 
    (user.name.toLowerCase().includes(query.toLowerCase())||user.email.toLowerCase().includes(query.toLowerCase())))

    const deleteU = (id)=>
    {
        const deleteUser = users.filter(item => item.id !== id)
        setUsers(deleteUser)//set the new array 
    }

    const showDataUser = (id) =>
    {
        props.callbackID(id)
    }

    useEffect(()=>{
        props.callbackIsShow(true)
       }, [props.callbackID])
    
    useEffect(()=>{
        fetchUsers();
       }, [])

    const cancelUser = ()=>
    {
        setIsAddUser(false)
    }

  return (
    <div>
        <span>Search  <input value = {query} onChange={e=>setQuery(e.target.value)} type="search"  /></span>
        {!isAddUser && <button onClick={() => setIsAddUser(true)}>Add</button>} <br /><br />
        {isAddUser?<AddUser key={`addUser`}  callback ={cancelUser}/>:null}  
        {query === ""?(users.map(user => <User key={user.id}  userData={user} callback1={deleteU} callback2={showDataUser}/>)):
        (filterUsers.map(user => <User key={user.id}  userData={user} callback1={deleteU} callback2={showDataUser}/>))}
    </div>
  )
}