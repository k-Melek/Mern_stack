import React from 'react'
import noteStyle from './Note.module.css'
import { Link } from 'react-router-dom';

const Note = ({note, deleteNote}) => {

    const formattedDate = new Date(note.createdAt).toLocaleString();//FIXING MONGO DATE /TIME

    

  return (
    <div className={noteStyle.note}>
        <h1>{note.isImportant && "📌"} {note.title}</h1>
        <p>{note.content}</p>
        <div className='d-flex justify-content-between'>
            <p>{formattedDate}</p>
            <div>
                <button className={noteStyle.button_edit}>
                    <Link to={`/notes/${note._id}/edit`} >edit</Link>
                </button>
                <button className={noteStyle.button_delete} onClick={() => deleteNote(note._id)}>delete</button>
            </div>
        </div>
    </div>
  )
}

export default Note