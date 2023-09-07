import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const FormComponent = () => {

  const navigate = useNavigate()

  const [heroID, setHeroID] = useState("")

  const searchHero = (e) => {
    e.preventDefault()
    console.log("Hero id : ", heroID);
    navigate(`/hero/${heroID}`)
  }

  return (
    <form onSubmit={searchHero}>
      <label htmlFor="">Hero ID</label>
      <input className='form-control mt-2' type='number'
      onChange={(e) => setHeroID(e.target.value)}
      value={heroID}
      />
      <button className='btn btn-success mt-2'>Search</button>
    </form>
  )
}

export default FormComponent