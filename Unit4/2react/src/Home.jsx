import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Home() {
    let[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then((response)=>response.json())
        .then((data)=> setData(data.posts) )
      
     
    },[])

  return (
    <div>
        {/* {data} */}
       {data.map((blog)=>(
        <div key={blog.id}>
         <Link to={`/posts/${blog.id}`}>{blog.title}</Link>

            </div>
       ))}
    </div>
  )
}

export default Home