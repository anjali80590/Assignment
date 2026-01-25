import React from 'react'

function Summary({total,correct,incorrect,unattempted}) {
  return (
    <div>
        <div className='summary'>
            <h2>Session Summary</h2>
            <p>Total Cards : {total}</p>
            <p> Corect Cards :{correct}</p>
            <p>Incorrect Cards :{incorrect}</p>
            <p> Unattempted Cards : {unattempted}</p>
        </div>
    </div>
  )
}

export default Summary