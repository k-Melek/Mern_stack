import React, { useState } from "react";
import axios from "axios";
const AddPet = () => {
    const [pet, setPet] = useState({});
    const handleSub = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/pets", pet)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <h2>Add Pet</h2>
            <form onSubmit={handleSub}>
                <div className="mb-3">
                    <label className="form-label ">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={(e) =>
                            setPet({ ...pet, [e.target.name]: e.target.value })
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label ">Specie</label>
                    <input
                        type="text"
                        name="specie"
                        className="form-control"
                        onChange={(e) =>
                            setPet({ ...pet, [e.target.name]: e.target.value })
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label ">Breed</label>
                    <input
                        type="text"
                        name="breed"
                        className="form-control"
                        onChange={(e) =>
                            setPet({ ...pet, [e.target.name]: e.target.value })
                        }
                    />
                </div>
                <button>Submit</button>
            </form>
        </>
    );
};

export default AddPet;
