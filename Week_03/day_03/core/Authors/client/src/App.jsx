import AuthorsList from './components/AuthorsList'
import AuthorCreate from './components/AuthorCreate'
import AuthorEdit from './components/AuthorEdit'

import { Routes, Route } from "react-router-dom"



function App() {



  return (
    <div className='container mt-3'>
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<AuthorsList />} />
        <Route path='/new' element={<AuthorCreate/>} />
        <Route path='/:id/edit' element={<AuthorEdit/>} />
      </Routes>
    </div>
  )
}

export default App
