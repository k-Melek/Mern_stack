import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const JobShow = ({ baseUrl }) => {
  const { id } = useParams();
  const [job, setJob] = useState({ title: "", company: "", salary: "" });

  useEffect(() => {
    axios
      .get(baseUrl + "/jobs/" + id, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setJob(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>Job Details</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Job Title:</strong> {job.title}
            </li>
            <li className="list-group-item">
              <strong>Company:</strong> {job.company}
            </li>
            <li className="list-group-item">
              <strong>Salary:</strong> {job.salary}
            </li>
            <li className="list-group-item">
              <strong>Remote Working:</strong>{" "}
              {job.remote ? (
                <span className="text-success">Yes</span>
              ) : (
                <span className="text-danger">No</span>
              )}
            </li>
            <li className="list-group-item">
              <strong>Status:</strong> {job.status}
            </li>
          </ul>
          <div className="mt-3">
            <Link to={`/jobs/${job._id}/edit`} className="btn btn-primary mx-2">Edit</Link>
            <Link to={'/jobs'} className="btn btn-danger">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobShow;
