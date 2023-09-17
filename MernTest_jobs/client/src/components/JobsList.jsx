import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Job from "./Job";

const JobsList = (props) => {
  const [jobs, setJobs] = useState([]);

  const deleteJob = (id) => {
    console.log("Job ID = ", id, "WILL Be deleted");
    axios
      .delete(`http://localhost:8000/api/jobs/${id}`, { withCredentials: true })
      .then((response) => {
        console.log(response);
        const filteredJobs = jobs.filter((job) => job._id != id);
        setJobs(filteredJobs);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/jobs", { withCredentials: true })
      .then((serverResponse) => {
        console.log("SERVER RESPONSE : ", serverResponse.data);
        const sortedJobs = serverResponse.data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        setJobs(sortedJobs);
      })
      .catch((serverError) => {
        console.log("SERVER ERROR : ", serverError);
      });
  }, []);

  return (
    <div>
      <Link to={"/jobs/new"}>Create new jobs</Link>
      <h2>All Jobs</h2>
      <table className="table table-bordered table-striped border mt-3">
        <thead>
          <tr>
            <th>Job title</th>
            <th>Company</th>
            <th>Status</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>
                {" "}
                <Link to={`/jobs/${job._id}`}> {job.title} </Link>
                {job.remote && <span> (remote)</span>}{" "}
              </td>
              <td>{job.company}</td>
              <td>{job.status}</td>
              <th>{job.salary}</th>
              <td>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteJob(job._id)}
                >
                  delete
                </button>
                <Link
                  to={`/jobs/${job._id}/edit`}
                  className="btn btn-info mx-2"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {jobs.some((job) => job.status == "applied") && (
      
        <div>
          <hr />
          <h2>Applied Jobs</h2>
          <table className="table table-bordered table-striped border mt-3">
            <thead>
              <tr>
                <th>Job title</th>
                <th>Company</th>
                <th>Status</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs
                .filter((job) => job.status === "applied")
                .map((job) => (
                  <tr key={job._id}>
                    <td>
                      <Link to={`/jobs/${job._id}`}>{job.title}</Link>
                      {job.remote && <span> (remote)</span>}
                    </td>
                    <td>{job.company}</td>
                    <td>{job.status}</td>
                    <th>{job.salary}</th>
                    <td>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteJob(job._id)}
                      >
                        delete
                      </button>
                      <Link
                        to={`/jobs/${job._id}/edit`}
                        className="btn btn-info mx-2"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JobsList;
