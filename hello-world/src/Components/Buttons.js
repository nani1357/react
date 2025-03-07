import React from 'react'

function Buttons({AddStart,AddEnd,sortEarliest,sortLatest,Reset,Struct}) {
  return (
    <div>
      <button onClick={()=>AddStart()}>AddStart</button>
      <button onClick={()=>AddEnd()}>AddEnd</button>
      <button onClick={()=>sortEarliest()}>SortEarliest</button>
      <button onClick={()=>sortLatest()}>SortLatest</button>
      <button onClick={()=>Reset()}>Reset</button>
      <button onClick={()=>Struct()}>Structure</button>
    </div>
  )
}

export default Buttons