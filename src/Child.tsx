import React, { memo } from 'react'

const Child = ({count}) => {
    console.log("render child");
    
  return (
    <div>
        <p>Child</p>
        <h2>{count}</h2>
    </div>
  )
}


export default memo(Child)