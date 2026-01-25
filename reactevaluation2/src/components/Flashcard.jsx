import React from 'react'

function Flashcard({card,onAnswer}) {
   if(!card)return null;
  return (
    <div className='card'>
   <h3>{card.question}</h3>
   <div className='buttons'>
    <button onClick={()=>onAnswer(true)}>Correct</button>
    <button onClick={()=>onAnswer(false)}>Incorrect</button>
   </div>
    </div>
  )
}

export default Flashcard;