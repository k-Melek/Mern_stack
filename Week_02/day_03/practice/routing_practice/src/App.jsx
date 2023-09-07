import './App.css'

import { Route, Routes, Link } from 'react-router-dom'

import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'
import WordAndColor from './components/WordAndColor'

function App() {
  

  return (
    <>
      <fieldset>
      <legend>Testing Colors</legend>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/:number' element={<Number />}></Route>
        <Route path='/:word' element={<Word />}></Route>
        <Route path='/:word/:colorOne/:colorTwo' element={<WordAndColor />}></Route>
      </Routes>
      </fieldset>


    </>
  )
}

export default App
