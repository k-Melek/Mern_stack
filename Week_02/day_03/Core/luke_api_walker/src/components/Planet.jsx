import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Planet() {
  const { id } = useParams();
  const [planet, setPlanet] = useState("");

    useEffect(() => {
    
    axios.get(`https://swapi.dev/api/planets/${id}`)
        .then((response) => {
        setPlanet(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h2>Planet Details</h2>
      {planet && (
        <div>
          <p>Name: {planet.name}</p>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Surface Water: {planet.surface_water}</p>
          <p>Population: {planet.population}</p>
        </div>
      )}
    </div>
  );
}

export default Planet;



