import { useState } from 'react'

import './App.css'
import Color from './components/Color'
import Display from './components/Display'

function App() {
  const [colors, setColors] = useState([])
  const addBox = (newBox) => {
    setColors([...colors, newBox])
  }

  return (
    <>
      <fieldset>
        <legend>Colored Boxes</legend>
        <Color addBox={addBox}/>
        <Display colors={colors}/>
      </fieldset>
        
    </>
  )
}

export default App
