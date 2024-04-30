import axios from "axios"

const urlUsers = "https://jsonplaceholder.typicode.com/users"
const urlTodos = "https://jsonplaceholder.typicode.com/todos"
const urlPosts = "https://jsonplaceholder.typicode.com/posts"

const getUsers = async () => 
{
    const { data } = await axios.get(urlUsers)
    const users = data.map(user => {
        return { id: user.id, name: user.name, email: user.email, street: user.address.street, city: user.address.city, zipCode: user.address.zipcode }
    })
    return users
}

const getUserTodos = async (userId) =>
{
    const { data } = await axios.get(`${urlTodos}?userId=${userId}`)
    return data
}

const getUserPosts = async ()=>
{
    const { data } = await axios.get(urlPosts)
    return data
}

const updateUser = async (id, user) =>
{
    const { data } = await axios.put(`${urlUsers}/${id}`, user)
    return data 
}

const updateTodo = async (id, todo) =>
{
    const { data } = await axios.put(`${urlTodos}/${id}`, todo)
    return data 
}

const deleteUser = async (id) =>
{
    const {data} = await axios.delete(`${urlUsers}/${id}`)
    console.log(data)
    return data
}

const createTodo = async (todo) => {
    const {data} = await axios.post(urlTodos, todo)
    return data
}

const createPost = async (post) => {
    const {data} = await axios.post(urlPosts, post)
    return data
}

const createUser = async (user) => {
    const {data} = await axios.post(urlUsers, user)
    return data
}


export { getUsers , getUserTodos, updateUser, deleteUser, getUserPosts, updateTodo, createTodo, createPost, createUser }