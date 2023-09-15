import React,{useState} from 'react'
import RegisterForm from '../components/RegisterForm'
import axios from 'axios'

const Register = ({baseUrl}) => {

  const[user, setUser] = useState({
    userName:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const Register = (e,newUser) => {
    e.preventDefault();
    // console.log(newUser);
    // console.log(e);
    
    axios
        .post(baseUrl+'/register', newUser)
        .then(response => console.log(response))
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
        <RegisterForm user={user} setter={setUser} operation={Register} />
    </div>
  )
}

export default Register