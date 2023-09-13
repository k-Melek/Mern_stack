import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NoteCreate = (props) => {
  const navigate = useNavigate();

  const [note, setNote] = useState({
                                    title:"",
                                    content:"",
                                    isImportant:false
                                  })

  const [errors, setErrors] = useState({title:"",content:""})


  const formHandler = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:8000/api/notes", note)
        .then(response =>{ 
          console.log(response.data)
          navigate('/notes')
        })
        .catch(error => {
          // console.log(error.response.data)
          const serverErrors = error.response.data
          const errs = {title:"",content:""}
          for (let label of Object.keys(serverErrors)) {
            console.log("ERROR : ",label,"------","ERROR VALUE :", serverErrors[label].message );
            errs[label] = serverErrors[label].message
          }
          console.log("All BackEnd Errors",errs);
          setErrors({...errors,...errs})

        })
  }                                

  return (
    <div>
      <h4 className="bg-warning text-danger">Note from State : {JSON.stringify(note)} </h4>
      <hr />
      <h4 className="bg-secondary text-light"> Backend Errors : {JSON.stringify(errors)}</h4>
      <form onSubmit={formHandler}>
        <div className="form-group mb-3">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" 
            onChange={(e) => setNote({...note, title:e.target.value})}
            value={note.title}
          />
          {errors.title&&<span className="text-danger">{errors.title} </span>} 
        </div>
        <div className="form-group mb-3">
          <label htmlFor="">Content</label>
          <textarea type="text" className="form-control"
            onChange={(e) => setNote({...note, content:e.target.value})}
            value={note.content}
          ></textarea>
          {errors.content &&<span className="text-danger">{errors.content} </span>} 
        </div>
        <div className="form-group mb-3">
          <input type="checkbox" className="form-check-input" 
            onChange={(e) => setNote({...note, isImportant:e.target.checked})}
            value={note.isImportant}
          />
          <label htmlFor="" className="form-check-label mx-2">Is Important ?</label>
        </div>
        <div className="text-center">
          <button className="btn btn-outline-primary w-50">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NoteCreate;
