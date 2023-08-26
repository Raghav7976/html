import React, {useContext} from 'react'
import DataContext from './DataContext'

const D = () => {
    const sharedData = useContext(DataContext)
  return (
    <div>
    DComponent
    <p>sdfhusdfliuileefu: {sharedData}</p>
    </div>
  )
}

export default D
