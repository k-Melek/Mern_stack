// import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

// Import ALL COMPONENTS !!!
import Nav from "./components/Nav"
import NoteList from "./components/NoteList"
// import Note from "./components/Note"
import NoteCreate from "./components/NoteCreate"
import NoteEdit from "./components/NoteEdit"
import NoteShow from "./components/NoteShow"

function App() {

  const baseUrl ="http://localhost:8000/api"


  return (
    
      <div className='container mt-3'>
        <Nav />
        {/* ROUTES */}
        <Routes>  
          {/* Notes List Route */}
          <Route path="/notes" element={<NoteList />} />
          {/* One Note Route */}
          <Route path="/notes/:id" element={<NoteShow baseUrl={baseUrl}/>} />
          {/* Create Note Route */}
          <Route path="/notes/new" element={<NoteCreate />} />
          {/* Edit Note Route */}
          <Route path="/notes/:id/edit" element={<NoteEdit />} />
          {/* Gard Route */}
          <Route path="*" element={<Navigate to='/notes' replace />} />
        </Routes>
      </div>
    
  )
}

export default App
