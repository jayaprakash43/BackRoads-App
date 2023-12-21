
import React from 'react'

function Tittle(pro) {
  return (
    <div>
      <h1 style={{textAlign : 'center'}}>
        {pro.tittle}  <span style={{color : 'aqua'}}>{pro.subtittle} </span>
      </h1>
    </div>
  )
}

export default Tittle


