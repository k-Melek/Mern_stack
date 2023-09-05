import React, { useState } from 'react'
import Display from './Display';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formHandler = (event) => {

    }
    return (
        <>
            <form onSubmit={formHandler}>
                <p>First Name: <input type="text"
                onChange={(e)=> {setFirstName(e.target.value)}}
                value={firstName}
                /></p>

                <p>Last Name: <input type="text" 
                onChange={(e)=> {setLastName(e.target.value)}}
                value={lastName}
                /></p>

                <p>Email: <input type="text"  
                onChange={(e)=> {setEmail(e.target.value)}}
                value={email}
                /></p>
                
                <p>Password: <input type="password"  
                onChange={(e)=> {setPassword(e.target.value)}}
                value={password}
                /></p>

                <p>Confirm Password: <input type="password"/></p>
            </form>
            <Display firstName={firstName} lastName={lastName} email={email} password={password}/>
        </>
    )
}

export default Form