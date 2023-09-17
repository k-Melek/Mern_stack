import React, {useState} from 'react'
import Form from '../components/Form'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Create = (props) => {
    const navigate = useNavigate()
    const [note, setNote] = useState({ title: "", content: "", isImportant: false })
    const [errors, setErrors] = useState({ title: "", content: "" })
    const createNote = (newNote) => {
        axios.post('http://localhost:8000/api/notes', newNote, { withCredentials: true })
        .then(response => {
          console.log(response.data)
          navigate('/notes')
        })
        .catch(error => {
          const errs = { title: "", content: "" }
          console.log(error.errors);
          // for (let key of Object.keys(error.response.data)) {
          //   errs[key] = error.response.data[key].message
          // }
          // setErrors({ ...errors, ...errs })
        })
    }
  return (
    <div>
        <Form note={note} setter={setNote} errors={errors} operation={createNote}>Create</Form>
    </div>
  )
}

export default Create