import { useState, useEffect } from 'react'
export default function Post(props)
{
    return(
        <div style={{border: '2px solid purple', padding: '10px', margin: '10px'}}
         key={props.postData.id}>
               <label>Title: {props.postData.title}</label> <br/>
            <label>Body: {props.postData.body}</label> <br/>

        </div>)
}