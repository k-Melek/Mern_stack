import { useState } from 'react'

import './App.css'

import{ Routes, Route} from 'react-router-dom'
import ProductForm from './components/ProductForm'
import AllProducts from './components/AllProducts'
import ShowOneProduct from './components/ShowOneProduct'

function App() {


  return (
    <>
      <h1>Product Manager</h1>
      <Routes>
        <Route path='/' element={
          <>
            <ProductForm />
            <AllProducts />
          </>
          
        } />
        <Route path='/:id' element={
          <ShowOneProduct/>
        }/>
      </Routes>
    </>
  )
}

export default App
