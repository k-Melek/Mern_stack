import React,{useState} from 'react'
import RegisterForm from '../components/RegisterForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = ({baseUrl}) => {

  const navigate = useNavigate()

  const[user, setUser] = useState({
    userName:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const register = (e,newUser) => {
    
    e.preventDefault();
    // console.log(newUser);
    // console.log(e);
    
    axios
        .post(baseUrl+'/register', newUser , { withCredentials: true })
        .then(response => {
          console.log(response)
          navigate('/notes')
        })
        .catch(error => console.log(error))

    setUser({
      userName:"",
      email:"",
      password:"",
      confirmPassword:""
    })
  }


  return (
    <div>
        <RegisterForm user={user} setter={setUser} operation={register} />
    </div>
  )
}

export default Register