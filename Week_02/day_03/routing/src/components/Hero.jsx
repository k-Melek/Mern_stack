import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Hero = (props) => {
    const[hero, setHero] = useState()
    const {heroID} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://akabab.github.io/superhero-api/api/id/${heroID}.json`)
            .then(response => {
                setHero(response.data)
                console.log(response.data)})
            .catch(error => {
                console.log(error)
                navigate('/error')
                })
    },[heroID])
  return (
    <div>
        {hero
        ?<div>
            
                <button className='btn btn-success m-2'
                onClick={() =>navigate(-1)}
                >Previous</button>
                <button className='btn btn-success m-2'
                onClick={() =>navigate(+1)}
                >Next</button>
            <div>

                <h1>{hero.name}</h1>


                <img src={hero.images.md} alt={hero.name} />
                <h2>POWER STATS</h2>
                <h4>intelligence {hero.powerstats.intelligence}</h4>
                <h4>strength {hero.powerstats.strength}</h4>
                <h4>speed {hero.powerstats.speed}</h4>
                <h4>durability {hero.powerstats.durability}</h4>
                <h4>power {hero.powerstats.power}</h4>
                <h4>combat {hero.powerstats.combat}</h4>
            </div>
        </div>
        :<h4>Loading ...</h4> }
        
        <hr />
        {hero
        &&<div>
            <img src={hero.images.md} alt={hero.name} />
            <div>
                <h2>POWER STATS</h2>
                <h4>{hero.powerstats.intelligence}</h4>
                <h4>{hero.powerstats.strength}</h4>
                <h4>{hero.powerstats.speed}</h4>
                <h4>{hero.powerstats.durability}</h4>
                <h4>{hero.powerstats.power}</h4>
                <h4>{hero.powerstats.combat}</h4>
            </div>
        </div> }
            
            
        
    </div>
  )
}

export default Hero