import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Note from './Note'

const NoteList = (props) => {

  const [notes, setNotes] = useState([])

  const deleteNote =(id) => {
    axios.delete(`http://localhost:8000/api/notes/${id}`)
          .then(serverResponse => {
            console.log("Server Response : ", serverResponse);
            const filteredNotes = notes.filter(note => note._id != id)
            setNotes(filteredNotes)
          })
          .catch(serverError => {
            console.log("Server Error : ", serverError);
          })
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/notes')
          .then(serverResponse => {
            console.log("Server Response : ", serverResponse.data);
            setNotes(serverResponse.data)
          })
          .catch(serverError => {
            console.log("Server Error : ", serverError);
          })
  }, [] )
  return (
    <div>
      {/* <h2>{JSON.stringify(notes)}</h2> */}
      {notes.map(note => <Note key={note._id} note={note} deleteNote={deleteNote}/>)}
      {/* <Note /> */}
    </div>
  )
}

export default NoteList