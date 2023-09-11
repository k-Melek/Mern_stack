import { useState } from 'react'

import './App.css'

import{ Routes, Route} from 'react-router-dom'
import ProductForm from './components/ProductForm'

function App() {


  return (
    <>
      <h1>Product Manager</h1>
      <Routes>
        <Route path='/' element={
          <>
            <ProductForm />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
