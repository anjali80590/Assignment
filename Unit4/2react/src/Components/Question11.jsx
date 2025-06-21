import React, { useState } from 'react'

function Question11() {
    let[color,setColor]=useState('Green');
  function toggleBackground(){
    setColor(color=='Green'?'Yellow':'Green')
  }
  return (
    <div style={{ height: "100vh", backgroundColor: color }}>
      <span>Text Message: {color} </span> <br />
      <button style={{color:color}} onClick={toggleBackground}>{color}</button>
    </div>
  );
}

export default Question11

