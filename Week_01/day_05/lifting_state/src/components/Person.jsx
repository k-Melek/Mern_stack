import React from 'react'

const Person = ({people}) => {
  return (
    <fieldset>
        <legend><h2>PEOPLE</h2></legend>
        {people.map((person,idx) => <div key={idx} style={{backgroundColor:person.favColor}} >
            <h4>{person.name} </h4>
            <h4>{person.age} </h4>
        </div> )}
    </fieldset>
  )
}

export default Person