import React from "react";
import { Link } from "react-router-dom";

const AuthorForm = (props) => {
  const { author, setter, operation, errors } = props;
  // console.log("FORM PROPS", props);
  const formHandler = (e) => {
    e.preventDefault();
    console.log(author);
    operation(author);
  };

  return (
    <div>
      <Link to='/'>Home</Link>
      <br/>
      <span className='text-success'>{props.children}</span>
      <form onSubmit={formHandler}>
        <div className="form-group mb-3">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setter({ ...author, name: e.target.value })}
            value={author.name}
          />
          {errors.name && (
            <span className="text-danger"> {errors.name}</span>
          )}
        </div>
        <div>
          <Link to='/' className='btn btn-info mx-2' >Cancel</Link>
          <button className='btn btn-info mx-2'>Submit</button>

        </div>
      </form>
    </div>
  );
};

export default AuthorForm;
