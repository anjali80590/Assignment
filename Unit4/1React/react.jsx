import React, { useState } from 'react'

function react() {
    let[page,setPage]=useState('home');
    
    let pageContent=()=>{
        if(page=='home') return <h1>Home</h1>
        if(page=='about') return <h1>About</h1>
        if(page=='contact') return <h1>contact</h1>
    }
  return (
  <div>
    <nav>
        <button onClick={()=>setPage('home')}>Home</button>
        <button onClick={()=>setPage('about')}>about</button>
        <button onClick={()=>setPage('contact')}>contact</button>
    </nav>
    {pageContent()}
  </div>
  )
}

export default react