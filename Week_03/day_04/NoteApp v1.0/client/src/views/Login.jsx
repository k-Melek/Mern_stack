import React,{useState} from 'react'
import axios from 'axios'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'

const Login = ({baseUrl}) => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const login = (e, loginUser) => {
    e.preventDefault();
    console.log("Login User", loginUser);
    axios
        .post(baseUrl+"/login", loginUser , { withCredentials: true })
        .then(response => {
          console.log(response)
          navigate('/notes')
        })
        .catch(error => console.log(error))
  }

  return (
    <div>
      <LoginForm user={user} setter={setUser} operation={login} />
    </div>
  )
}

export default Login