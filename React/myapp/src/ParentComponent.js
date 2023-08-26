import React, { Children, useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
   const [Data, setData]= useState(null)
   const HandleChild=(Children)=>{
setData(Children)
   }
  return (
    <div>
      <ChildComponent
      onDataFromChild={HandleChild}
      />
      <p>{Data}</p>
    </div>
  )
}

export default ParentComponent
