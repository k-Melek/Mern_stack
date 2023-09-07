import { useState } from 'react'

import './App.css'
import {Routes, Route, Link, Router} from 'react-router-dom' //CONTAINER FOR ROUTES


import FormComponent from './components/FormComponent'
import People from './components/People'
import Planet from './components/Planet'
import Ship from './components/Ship'

function App() {
  

  return (
    <>
      <FormComponent />
        <Routes>
          <Route path="/planet/:id" element={<Planet />} />
          <Route path="/people/:id" element={<People />} />
          <Route path="/ship/:id" element={<Ship />} />
        </Routes>
    </>
  )
}

export default App
