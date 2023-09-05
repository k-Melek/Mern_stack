import React,{setState} from 'react'

const PersonCard = (props) => {
console.log(props);
const { firstname, lastname, age, hairColor } = props.person;

  return (
    <fieldset>
        <legend>Person Card</legend>
        <h2>{`${firstname} ${lastname}`}</h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
    </fieldset>
    )
}

export default PersonCard