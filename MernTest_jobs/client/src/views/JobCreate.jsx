import React, {useState} from 'react'

import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import JobForm from '../components/JobForm'

const JobCreate = (props) => {

  const navigate = useNavigate()
    const [job, setJob] = useState({ title: "", company: "", salary: "", remote: false })
    const [errors, setErrors] = useState({ title: "", company: "", salary: "" })
    const createJob = (newJob) => {
      axios.post('http://localhost:8000/api/jobs', newJob, { withCredentials: true })
          .then(response => {
            console.log(response.data)
            navigate('/jobs')
          })
          .catch(error => {
            const errs = { title: "", company: "", salary: "" }
            // console.log(error.response.data.errors);
            for (let key of Object.keys(error.response.data.errors)) {
              errs[key] = error.response.data.errors[key].message
            }
            setErrors({ ...errors, ...errs })
            
          })
    }

  return (
    <div>
      <JobForm job={job} setter={setJob} errors={errors} operation={createJob} >Create</JobForm>
    </div>
  )
}

export default JobCreate