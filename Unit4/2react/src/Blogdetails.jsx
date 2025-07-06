import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Blogdetails() {
    let{id}=useParams();
    let[data,setData]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/posts/${id}`)
        .then((response)=>response.json())
        .then((data)=>setData(data));
    },[id])
  return (
    <div>
        <h2>{data.title}</h2>
        <h5>{data.body}</h5>
    </div>
  )
}

export default Blogdetails