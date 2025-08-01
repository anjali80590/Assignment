import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Home() {
  let[data,setData]=useState([]);
  let [search,setSearch]=useState('');
  let[debounce,setDebounce]=useState('')
  async function fetchData(){
    try{
      let response=await fetch('https://dummyjson.com/posts');
      let result=await response.json();
      console.log(result);
      setData(result.posts);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  useEffect(()=>{
    if(search){
      let id=setTimeout(()=>{
        setDebounce(search);
      },1000)
      return ()=>clearTimeout(id);
    }
  },[search])
  useEffect(()=>{
    if(debounce){
      let result=data.filter((val)=>val.title.toLowerCase().includes(debounce.toLowerCase()))
      setData(result);
    }
  },[debounce,data])
  return (
    <div>
      <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <h3>Home Page</h3>
      {data.map((val) => (
        <li>
          {" "}
          <Link to={`${val.id}`}>{val.title}</Link>
        </li>
      ))}
    </div>
  );
}

export default Home