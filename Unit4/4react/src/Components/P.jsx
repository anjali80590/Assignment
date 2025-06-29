import axios from 'axios'
import React, { useEffect, useState } from 'react'

function P() {
    let[data,setData]=useState([])
    let[search,setSearch]=useState('')
    let[sortBy,setSortBy]=useState('All')
    let[FilterBy,setFilterBy]=useState('All')
    let[filteredMeme,setFilteredMeme]=useState([])
    async function fetchData(){
        try{
            let response=await axios.get('https://api.imgflip.com/get_memes')
             setData(response.data.data.memes)
              console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
     
    useEffect(()=>{
        let result=[...data];
        if(search.trim()!==''){
            result=result.filter((meme)=>meme.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(FilterBy=='Width'){
            result=result.filter((meme)=>meme.width>500)
        }else if(FilterBy=='Height'){
            result=result.filter((meme)=>meme.height>500)
        }
        if(sortBy=='name'){
            result=result.sort((a,b)=>a.name.localeCompare(b.name));
        }
        if(sortBy=='Width'){
            result=result.sort((a,b)=>a.width-b.width);
        }
        setFilteredMeme(result);
    },[sortBy,FilterBy,data,search])
  return (
    <div>
      <button onClick={fetchData}>Load Memes</button>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option>All</option>
        <option>Width</option>
        <option value='name'>Name</option>
      </select>
      <select value={FilterBy} onChange={(e) => setFilterBy(e.target.value)}>
        <option>All</option>
        <option>Width</option>
        <option>Height</option>
      </select>
      {filteredMeme.map((meme, i) => (
        <div key={i}>
          <div>{meme.name}</div>
          <img src={meme.url} width="150px" />
        </div>
      ))}
    </div>
  );
}

export default P