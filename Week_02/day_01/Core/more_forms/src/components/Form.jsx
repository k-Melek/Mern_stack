import React, { useState } from 'react';
import Display from './Display';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const formHandler = (event) => {
    event.preventDefault();

    // Validation rules
    const minNameLength = 3; // Minimum length for first name, last name, and email
    const minPasswordLength = 8; // Minimum length for password and confirm password

    // Validate first name
    if (firstName.length < minNameLength) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: `First Name must be at least ${minNameLength} characters`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: '', // Clear the error message if the input is valid
      }));
    }

    // Validate last name
    if (lastName.length < minNameLength) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: `Last Name must be at least ${minNameLength} characters`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: '', // Clear the error message if the input is valid
      }));
    }

    // Validate email
    if (email.length < minNameLength) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: `Email must be at least ${minNameLength} characters`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '', // Clear the error message if the input is valid
      }));
    }

    // Validate password
    if (password.length < minPasswordLength) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: `Password must be at least ${minPasswordLength} characters`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '', // Clear the error message if the input is valid
      }));
    }

    // Validate confirm password
    if (confirmPassword.length < minPasswordLength) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: `Confirm Password must be at least ${minPasswordLength} characters`,
      }));
    } else if (confirmPassword !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: `Passwords do not match`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: '', // Clear the error message if the input is valid
      }));
    }

    // If there are no validation errors, continue with form submission logic
    if (!Object.values(errors).some((error) => error !== '')) {
      // Continue with form submission logic or any other actions
    }
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <p>
          First Name: <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <span style={{ color: 'red' }}>{errors.firstName}</span> {/* Display error message */}
        </p>

        <p>
          Last Name: <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <span style={{ color: 'red' }}>{errors.lastName}</span> {/* Display error message */}
        </p>

        <p>
          Email: <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span style={{ color: 'red' }}>{errors.email}</span> {/* Display error message */}
        </p>

        <p>
          Password: <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span style={{ color: 'red' }}>{errors.password}</span> {/* Display error message */}
        </p>

        <p>
          Confirm Password: <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <span style={{ color: 'red' }}>{errors.confirmPassword}</span> {/* Display error message */}
        </p>

        <button type="submit">Submit</button>
      </form>
      <Display
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
      />
    </>
  );
};

export default Form;
