import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = ({baseUrl}) => {

    const navigate = useNavigate()

    const logout = () => {
        console.log("Logout");
        axios
            .post(baseUrl+"/logout",{} , { withCredentials: true })
            .then(response => {
                console.log(response)
                navigate('/login')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className=' border-bottom  border-3 border-dark mb-5'>
            <div className='text-center mb-3 '>
                <h1>Notes 📝</h1>
            </div>
            <div className="d-flex justify-content-around">
                <Link to={'/notes'} className='h2'>Home</Link>
                <Link to={'/notes/new'} className='h2'>Create</Link>
                <Link className='text text-primary h2'
                    onClick={logout}
                >Logout</Link>
            </div>
        </div>
    )
}

export default Nav