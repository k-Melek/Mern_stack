import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Ship = () => {

    const {id} = useParams();
    const [ship,setShip] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
        .then((response) => {
            setShip(response.data); })
        .catch((error) => { console.log(error); })
    }, [id])
  return (
    <div>
      <h2>StarShip Details</h2>
      {ship && (
        <div>
          <p>Name: {ship.name}</p>
          <p>Model: {ship.model}</p>
          <p>Manufacturer: {ship.manufacturer}</p>
          <p>Crew: {ship.crew}</p>
          <p>cargo_capacity: {ship.cargo_capacity}</p>
        </div>
      )}
    </div>
  )
}

export default Ship