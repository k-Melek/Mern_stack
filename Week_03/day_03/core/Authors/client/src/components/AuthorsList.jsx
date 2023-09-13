import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const AuthorsList = (props) => {

const [authors, setAuthors] = useState([])

useEffect(() => {
    axios
        .get('http://localhost:8000/api/authors')
        .then(serverResponse => {
            console.log("SERVER RESPONSE : ", serverResponse.data);
            setAuthors(serverResponse.data)
            })
        .catch(serverError => {
            console.log("SERVER ERROR : ", serverError);
            })
},[])

const deleteAuthor = (id) => {
    console.log("NOTE ID = ",id, "WILL Be deleted");
    axios
        .delete(`http://localhost:8000/api/authors/${id}`)
        .then(response=> {
            console.log(response)
            const filteredAuthors = authors.filter(author => author._id != id)
            setAuthors(filteredAuthors)
            })
        .catch(error => console.log(error))
}

  return (
    <div>
        <Link to={'/new'} className='h3 my-2'>Add an Author</Link>
        <div>
            <h5 className='h3 mt-2'>We have quotes by:</h5>
            <table className="table table-striped border table-bordered">
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author =>
                    <tr key={author._id}>
                        <th>{author.name}</th>
                        <th>
                            {/* <button className='btn btn-info mx-2'> */}
                                <Link to={`/${author._id}/edit`} className='btn btn-info mx-2'>Edit</Link>
                            {/* </button> */}
                            <button className='btn btn-info mx-2'
                                onClick={() => deleteAuthor(author._id)}
                            >Delete</button>
                        </th>
                    </tr>  
                    )} 
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AuthorsList