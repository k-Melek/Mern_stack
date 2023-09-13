import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams , Link } from 'react-router-dom'
import noteStyle from "./Note.module.css";

const NoteShow = ({baseUrl}) => {

    

    const {id} = useParams()

    const [note, setNote] = useState({title:"", content:""})

    useEffect(() => {
        axios
            .get(baseUrl + "/notes/" + id)
            .then(response => {
                console.log(response.data);
                setNote(response.data)
                
            })
            .catch(error => console.log(error))
    } , [id])

    const formattedDate = new Date(note.createdAt).toLocaleString(); //FIXING MONGO DATE /TIME

  return (
    <div className={noteStyle.note}>
      <h1>
        {note.isImportant && "📌"} {note.title}
      </h1>
      <p>{note.content}</p>
      <div className="d-flex justify-content-between">
        <p>{formattedDate}</p>
        {/* <div>
          <Link
            className="btn btn-info mx-2"
            style={{ width: "100px", height: "40px" }}
            to={`/notes/${note._id}/edit`}
          >
            edit
          </Link>

          <button
            className={noteStyle.button_delete}
            onClick={() => deleteNote(note._id)}
          >
            delete
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default NoteShow