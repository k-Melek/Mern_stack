import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [superHeros, setSuperHeros] = useState([])
  const [superheroAxios, setSuperHerosAxios] = useState([])
  const [superheroEffect, setSuperHerosEffect] = useState([])

  const fetchAPI =() =>{

    fetch ("https://akabab.github.io/superhero-api/api/all.json")
    .then(response => response.json() )
    .then(jsonResponse =>{ 
      console.log("Response From API",jsonResponse)
      setSuperHeros(jsonResponse)
    })
    .catch(error => console.log(error))
  }

  const axiosAPI = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then(response => {
      console.log("AXIOS RESPONSE : ",response.data)
      setSuperHerosAxios(response.data)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then(response => {
      console.log("useEffect RESPONSE : ",response.data)
      setSuperHerosEffect(response.data)
    })
    .catch(error => console.log(error))
  },[]) //! <<< NEVER STATE VARIABLES 

  return (
    <>
      <fieldset>
        <legend><h1>🎈🎈 SuperHeros API 🎈🎈</h1></legend>
        <button onClick={fetchAPI}>Fetch SuperHeros API</button>
        <button onClick={axiosAPI}>Axios SuperHeros API</button>
        <fieldset style={{background :"coral"}}>
          <legend>Fetch SuperHeros</legend>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Full Name</th>
                <th>Publisher</th>
              </tr>
            </thead>
            <tbody>
              {superHeros.map(hero => 
              <tr key={hero.id}>
                <td>{hero.id} </td>
                <td><img src={hero.images.xs} alt="{hero.name}" /></td>
                <td>{hero.name}</td>
                <td>{hero.biography.fullName}</td>
                <td>{hero.biography.publisher}</td>
              </tr> )}
              
            </tbody>
          </table>
        </fieldset>
        <fieldset style={{background :"lightblue"}}>
          <legend> Axios SuperHeros </legend>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Full Name</th>
                <th>Publisher</th>
              </tr>
            </thead>
            <tbody>
              {superheroAxios.map(hero => 
              <tr key={hero.id}>
                <td>{hero.id} </td>
                <td><img src={hero.images.xs} alt="{hero.name}" /></td>
                <td>{hero.name}</td>
                <td>{hero.biography.fullName}</td>
                <td>{hero.biography.publisher}</td>
              </tr> )}
              
            </tbody>
          </table>
        </fieldset>
        <fieldset style={{background :"silver"}}>
          <legend>useEffect SuperHeros</legend>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Full Name</th>
                <th>Publisher</th>
              </tr>
            </thead>
            <tbody>
              {superheroEffect.map(hero => 
              <tr key={hero.id}>
                <td>{hero.id} </td>
                <td><img src={hero.images.xs} alt="{hero.name}" /></td>
                <td>{hero.name}</td>
                <td>{hero.biography.fullName}</td>
                <td>{hero.biography.publisher}</td>
              </tr> )}
              
            </tbody>
          </table>
        </fieldset>
      </fieldset>
    </>
  )
}

export default App
