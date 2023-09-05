import React from 'react'

const Display = (props) => {
  return (
    <fieldset>
        <legend>
            <h1>🔥🎈 Display 🎈🔥</h1>
        </legend>
        <h4>
            Username : {props.username} <br />
            Age : {props.age}<br />
            FavFood :{props.favFood}
        </h4>

    </fieldset>
  )
}

export default Display