import React from 'react'

const Display = ({animals}) => {
    // console.log(animals);
  return (
    <fieldset>
        <legend><h2>Display</h2></legend>
    <hr />
    <h4>
        Animals from PROPS : {animals}</h4>
        {animals.map((animal,idx) => <h4 key={idx}><li>{animal} </li></h4>) }
    </fieldset>
    
  )
}

export default Display