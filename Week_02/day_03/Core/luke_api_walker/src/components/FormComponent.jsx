// src/FormComponent.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FormComponent() {
  const [resource, setResource] = useState('planet');
  const [id, setId] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'resource') {
      setResource(value);
    } else if (name === 'id') {
      setId(value);
    }
  };

  return (
    <form>
      <label>
        Select Resource:
        <select name="resource" value={resource} onChange={handleInputChange}>
          <option value="planet">Planet</option>
          <option value="people">People</option>
          <option value="ship">Ship</option>
        </select>
      </label>
      <br />
      <label>
        Enter ID:
        <input
          type="number"
          name="id"
          value={id}
          onChange={handleInputChange}
          placeholder="Enter ID"
        />
      </label>
      <br />
      <Link to={`/${resource}/${id}`}>
        <button type="submit">Submit</button>
      </Link>
    </form>
  );
}

export default FormComponent;
