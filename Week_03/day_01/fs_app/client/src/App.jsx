import { useState } from 'react'
import{ Routes, Route} from 'react-router-dom'
import AddPerson from './components/AddPerson'
import AllPeople from './components/AllPeople'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <AddPerson />
            <AllPeople />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
