import { useState } from 'react'

import './App.css'

import {Routes, Route, Link, Router} from 'react-router-dom' //CONTAINER FOR ROUTES
import Home from './components/Home'
import FormComponent from './components/FormComponent'
import Hero from './components/Hero'
import Error from './components/Error'

function App() {
  

  return (
    <>
      <fieldset>
        <legend><h1> Routing </h1></legend>
        {/* <a href="/">APP</a>
        <a href="/home">Home</a> */}
        <Link to={'/'} className='btn btn-danger m-2'> App.js </Link>
        <Link to={'/home'} className='btn btn-danger m-2'> Home </Link>
        {/* <Link to={'/hero'} className='btn btn-primary m-2'> Hero </Link> */}
        {/* <Link to={'/form'} className='btn btn-danger m-2'> Form </Link> */}
        <FormComponent />

        <br />

        <Routes>
          <Route path='/home' element={<Home />} ></Route>
          {/* <Route path='/form' element={<FormComponent />}></Route> */}
          <Route path='/hero/:heroID' element={<Hero />}></Route>
          <Route path='/error' element={<Error />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </fieldset>
    </>
  )
}

export default App
