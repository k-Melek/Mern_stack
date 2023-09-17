import React from "react";
import { Link } from "react-router-dom";

const JobForm = (props) => {
  const { job, setter, operation, errors } = props;
  // console.log(errors);
  const formHandler = (e) => {
    e.preventDefault();
    operation(job);
  };

  return (
    <>
      <>
        <h1>Form</h1>
        <form onSubmit={formHandler}>
          <div className="form-group mb-3">
            <label htmlFor="">Title</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setter({ ...job, title: e.target.value })}
              value={job.title}
            />
            {errors.title && (
              <span className="text-danger h5"> {errors.title}</span>
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="">Company</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setter({ ...job, company: e.target.value })}
              value={job.company}
            />
            {errors.company && (
              <span className="text-danger h5"> {errors.company}</span>
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="">Salary</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setter({ ...job, salary: e.target.value })}
              value={job.salary}
            />
            {errors.salary && (
              <span className="text-danger h5"> {errors.salary}</span>
            )}
          </div>
          <div className="form-group mb-3">
            <input
              type="checkbox"
              className="form-check-input mx-3"
              onChange={(e) => setter({ ...job, remote: e.target.checked })}
              checked={job.remote}
            />
            <label className="form-check-label">Remote ?</label>
          </div>

          {job.status && (
            <div className="form-group mb-3">
              <label htmlFor="">Status</label>
              <select
                className="form-control"
                name="status"
                id=""
                onChange={(e) => setter({ [e.target.name]: e.target.value })}
                defaultValue={job.status}
              >
                <option value="pending">Pending</option>
                <option value="applied">Applied</option>
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          )}

          <div className="text-center">
            <button className="btn btn-outline-primary mx-2">
              {props.children}
            </button>
            <Link to={"/jobs"} className="btn btn-outline-danger mx-2">
              Cancel
            </Link>
          </div>
        </form>
      </>
    </>
  );
};

export default JobForm;
