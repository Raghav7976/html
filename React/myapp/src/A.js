import React from 'react'
import DataContext from './DataContext'
import B from './B'

const A = () => {
    const rag=" ssdhefmendolqJHHVJLD;OIOI"
  return (
    <DataContext.Provider value={rag}>
    <div>
      AComponent
      <B/>
    </div>
    </DataContext.Provider>
  )
}

export default A
