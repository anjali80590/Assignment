import axios from 'axios';
import React, { useState } from 'react'

function P() {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  let fetchMemes=async()=>{
    setLoading(true);
    setError('');
    try{
        let res= await axios.get('https://api.imgflip.com.get_memes');
        let data=res.data.data.meme;
        setMemes(data);
        setFilteredMemes(data);
    }
    catch(err){
        setError('failed to fetch;')
    }
  }
 
  let applyFilters=(data)=>{
    let result=[...data];
    if(search){
        result=result.filter((meme)=>meme.name.toLowerCase().includes(serach))
        
    }
  }

   
  return (
    <div>
       <div className="controls">
        <button onClick={fetchMemes}>load Memes</button>
        <input type="text" placeholder='seach memes' value={search} onChange={handleSearch} />
        <select value={sortBy} onChange={handleSort}>
            <option value="">Sort By</option>
            <option value="name"> Name</option>
            <option value="width">Width</option>
        </select>
        <select value={filterBy} onChange={handleFilter}>
            <option value="">Filter By</option>
            <option value="width">Width</option>
            <option value="height">Height</option>
        </select>
        <button onClick={handleReset}>Reset</button>
        <button onClick={toggleTheme}>Toggle {theme=='light'?'Dark':'light'}</button>
       </div>
       {loading && <p>Loading ...</p>}
       {error && <p>{error}</p>}
       {!loading && filteredMemes.length===0 && !error&& (<p>No Memes Found</p>)}
    </div>
  )
}

export default P