import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams , Link} from "react-router-dom";
import AuthorForm from "./AuthorForm";

const AuthorEdit = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [author, setAuthor] = useState({ name: "" });
  const [errors, setErrors] = useState({ name: "" });
  const [authorNotFound, setAuthorNotFound] = useState(false);

  const updateAuthor = (author) => {
    // e.preventDefault()
    axios
      .put(`http://localhost:8000/api/authors/${id}`, author)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log("Errors from Backend", error.response.data);
        console.log(Object.keys(error.response.data));
        const errs = { title: "", content: "" };
        for (let key of Object.keys(error.response.data)) {
          errs[key] = error.response.data[key].message;
        }
        console.log(errs);
        setErrors({ ...errors, ...errs });
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((response) => {
        console.log(response);
        setAuthor(response.data);
      })
      .catch((error) => {
        console.log(error);
        setAuthorNotFound(true);
      });
  }, [id]);

  return authorNotFound ? (
    <div className="alert alert-danger">
  <p className="mb-0">
    We're sorry, but we could not find the author you are looking for. Would
    you like to add this author to our database?
  </p>
  <div className="mt-3">
    <Link to="/new" className="btn btn-info mx-2">
      Create Author
    </Link>
    <Link to="/" className="btn btn-info mx-2">
      Back Home
    </Link>
  </div>
</div>

  ) : (
    <div>
      <AuthorForm
        author={author}
        setter={setAuthor}
        errors={errors}
        operation={updateAuthor}
      >
        Edit this author:
      </AuthorForm>
    </div>
  );
};

export default AuthorEdit;
