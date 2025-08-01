import React, { memo } from 'react'

function Child({double,add}) {
    console.log("child")
  return (
    <div>Child</div>
  )
}

export default memo(Child)


// component rerender function recreate  differential requality 