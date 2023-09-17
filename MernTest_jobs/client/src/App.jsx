import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";
import Register from "./views/Register";
import Login from "./views/Login";
import JobsList from "./components/JobsList";
import JobCreate from "./views/JobCreate";
import JobEdit from "./views/JobEdit";
import axios from "axios";
import JobShow from "./components/JobShow";

function App() {
  const baseUrl = "http://localhost:8000/api";

  const navigate = useNavigate();

  const logout = () => {
    console.log("Logout");
    axios
      .post(baseUrl + "/logout", {}, { withCredentials: true })
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-around">
        <h1>Jobs Board</h1>
        <button className="btn btn-primary h2" onClick={logout}>
          Logout
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Register baseUrl={baseUrl} />} />
        <Route path="/login" element={<Login baseUrl={baseUrl} />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/new" element={<JobCreate />} />
        <Route path="/jobs/:id/edit" element={<JobEdit />} />
        <Route path="/jobs/:id" element={<JobShow baseUrl={baseUrl} />} />

        <Route path="*" element={<Navigate to="/jobs" replace />} />
      </Routes>
    </div>
  );
}

export default App;
