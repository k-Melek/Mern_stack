import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const ProductEdit = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.error(err));
    },[])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' +id,{
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate(`/`);
            })
            .catch(err => console.error(err))

    }

  return (
    <fieldset>
        <legend>
            <h2>Update One Product</h2>
        </legend>
        <form onSubmit={updateProduct}>
            <p>
                <label htmlFor="">Title : </label>
                <input type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </p>

            <p>
                <label htmlFor="">Price : </label>
                <input type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </p>

            <p>
                <label htmlFor="">Description : </label>
                <input type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </p>
            <button
                // onClick={() => navigate(`/`)}
            >Submit</button>
        </form>
        <hr />
        <Link to={`/`}>Back Home</Link>

    </fieldset>
  )
}

export default ProductEdit