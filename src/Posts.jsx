import { getUserPosts } from "./Service";
import Post from './Post'
import { useState, useEffect } from "react"

export default function Posts(props)
{
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        fetchPosts();
    }, [])

    const fetchPosts = async () => 
    {
        setPosts(await getUserPosts())
    }

    return(
        <div style = {{border: '2px solid black'}}>
            {posts.map(post => <Post key={post.id}  postData={post} />).slice(0,2)}
        </div>
    )

}