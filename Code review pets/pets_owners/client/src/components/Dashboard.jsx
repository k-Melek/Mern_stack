import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Specie</th>
                        <th>Breed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.pets.map((p, i) => (
                        <tr key={i}>
                            <td>{p.name}</td>
                            <td>{p.specie}</td>
                            <td>{p.breed}</td>
                            <td>
                                <Link to={"/pets/" + p._id}>View</Link>|
                                <Link to={"/pets/" + p._id + "/edit"}>
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>Phone</th>

                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.owners.map((p, i) => (
                        <tr key={i}>
                            <td>
                                {p.firstName}
                                {p.lastName}
                            </td>
                            <td>{p.phone}</td>

                            <td>
                                <Link to={"/owners/" + p._id}>View</Link>|
                                <Link to={"/owners/" + p._id + "/edit"}>
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Dashboard;
