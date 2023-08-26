import React from 'react'


const ChildComponent = ({onDataFromChild}) => {
  const SendDataToParent=()=>{
    const Data="Logged in"
    onDataFromChild(Data)
   }
  return (
    <>
      <div>ChildComponent</div>
      <button>onClick={SendDataToParent}</button>
    </>
  )
}

export default ChildComponent
