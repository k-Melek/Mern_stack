import { useState } from 'react'
import './App.css'

function App() {

  const [pokemon,setPokemon] = useState([])
  const fetchAPI = () =>{
  fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
  .then(response=> response.json())
  .then(jsonResponse=> {
    console.log("RESPONSE FROM API :",jsonResponse.results)
    setPokemon(jsonResponse.results)
    
  })
  .catch(error=> console.log(error))}

  

  return (
    <>
    <fieldset>
        <h1>PokemonAPI</h1>
        <button onClick={fetchAPI}>Fetch Pokemon API</button>
        {/* {JSON.stringify(Pokemon)} */}
        <fieldset>
        <legend>Pokemon Names</legend>
        <ul>
          {pokemon.map((P,idx) => 
            <li key={idx}>{P.name}</li>
          )}
          </ul>
        
        </fieldset>

    </fieldset>
      
    </>
  )
}


export default App