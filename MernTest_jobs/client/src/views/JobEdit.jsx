import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import JobForm from '../components/JobForm'

const JobEdit = (props) => {

  const navigate = useNavigate()
  const {id} = useParams()
  const [job, setJob] = useState({ title: "", company: "", salary: "", remote: false ,status:""})
  const [errors, setErrors] = useState({ title: "", company: "", salary: "" })

  const updateJob = (job) => {
    axios
      .put(`http://localhost:8000/api/jobs/${id}`, job, { withCredentials: true })
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

  useEffect(()=> {
    axios.get(`http://localhost:8000/api/jobs/${id}`, { withCredentials: true })
    .then(response => {
      console.log(response);
      setJob(response.data)
    })
    .catch(error => {
      console.log(error.response.status)
      if (error.response.status === 401){
        navigate('/')
      }
    })
  }, [id])


  return (
    <div>
      <JobForm job={job} setter={setJob} errors={errors} operation={updateJob} >Edit</JobForm>
    </div>
  )
}

export default JobEdit