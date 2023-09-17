import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OnePet = () => {
    const [pet, setPet] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/pets/" + id)
            .then((res) => {
                console.log(res);
                setPet(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return <div>{pet.name}</div>;
};

export default OnePet;
