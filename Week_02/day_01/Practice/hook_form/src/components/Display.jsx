import React from 'react';

const Display = (props) => {
    console.log(props);
  return (
      <fieldset>
      <h2>Display</h2>
      <div>

      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Email: {props.email}</p>
      <p>Password: {props.password}</p>
      <p>Confirm Password: {props.confirmPassword}</p>
      </div>
    </fieldset>
  );
}

export default Display;
