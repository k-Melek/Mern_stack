import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const People = () => {

    const {id} = useParams("");
    const [person, setPerson] = useState("")
    const [homeworld, setHomeworld] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
                .then((response) => {
                    setPerson(response.data);
                }
                )
                .catch((error) => { console.log(error); })

    } , [id] )

    useEffect(() => {
      axios
        .get(person.homeworld)
        .then((response) => {
          setHomeworld(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [person]);




  return (
    <div>
      <h2>People Details</h2>
      {person && (
        <div>
          <p>Name: {person.name}</p>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Hair color: {person.hair_color}</p>
          <p>Skin Color: {person.skin_color}</p>
          <br />
          <a href={person.homeworld}>Homeworld</a>
        </div>
      )}
    </div>
  )
}

export default People