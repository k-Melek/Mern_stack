import React from "react";
import noteStyle from "./Note.module.css";
import { Link } from "react-router-dom";

const Note = ({ note, deleteNote }) => {
  const formattedDate = new Date(note.createdAt).toLocaleString(); //FIXING MONGO DATE /TIME

  return (
    <div className={noteStyle.note}>
      <h1>
        <Link to={`/notes/${note._id}`}  className="text-decoration-none text-reset">{note.isImportant && "📌"} {note.title}</Link>
      </h1>
      <p>{note.content}</p>
      <div className="d-flex justify-content-between">
        <p>{formattedDate}</p>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Note;
