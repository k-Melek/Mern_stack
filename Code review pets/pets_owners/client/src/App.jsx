import { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import AddPet from "./components/AddPet";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import OnePet from "./components/OnePet";
import OneOwner from "./components/OneOwner";

function App() {
    const [pets, setPets] = useState([]);
    const [owners, setOwners] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/pets")
            .then((res) => {
                console.log(res);
                setPets(res.data);
            })
            .catch((err) => console.log(err));
        axios
            .get("http://localhost:8000/api/owners")
            .then((res) => {
                console.log(res);
                setOwners(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <Link to={"/pets/add"} className="btn btn-primary ">
                Add a Pet
            </Link>
            <Routes>
                <Route
                    path="/"
                    element={<Dashboard pets={pets} owners={owners} />}
                />
                <Route path="/pets/add" element={<AddPet />} />
                <Route path="/pets/:id" element={<OnePet />} />
                <Route path="/owners/:id" element={<OneOwner pets={pets} />} />
            </Routes>
        </>
    );
}

export default App;
