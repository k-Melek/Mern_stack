import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const OneOwner = (props) => {
  const [owner, setOwner] = useState({});
  const [adopted, setAdopted] = useState({});
  const nav = useNavigate();
  const { id } = useParams();
  console.log(adopted);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/api/owners/${id}/addpet`, adopted)
      .then((result) => {
        nav("/owners/" + id);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);ze
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/owners/" + id)
      .then((res) => {
        console.log(res);
        setOwner(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        {owner.firstName} {owner.lastName}
      </div>
      {/* {owner.owner_pets &&
                owner.owner_pets.map((p, i) => <p key={i}>{p.name}</p>)} */}
      <form onSubmit={handleSubmit}>
                <select
                    name="pet_id"
                    id=""
                    onChange={(e) =>
                        setAdopted({ [e.target.name]: e.target.value })
                    }
                    defaultValue=""
                >

                    <option value="" disabled>Choose Pet</option>
                    {props.pets.map((p) => (
                        <option key={p._id} value={p._id}>
                            {p.name}
                        </option>
                    ))}
                </select>
                <button>Adopt</button>
            </form>
      
    </>
  );
};

export default OneOwner;
