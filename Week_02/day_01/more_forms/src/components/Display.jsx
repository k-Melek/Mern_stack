import React from 'react'

const Display = (props) => {
  return (
    <fieldset>
        <legend>Display</legend>
        <h4>
        User :{JSON.stringify(props)}
        </h4>
        <h3>
        User :{JSON.stringify(props.user)}
        </h3>
    </fieldset>
  )
}

export default Display