import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom";


const ShowOneProduct = (props) => {
    // const deletePROD= () => {
    //     axios.delete().then(navigate('/')).catch()
    // }

    const [product,setProduct] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    },[id])

    

    const navigate = useNavigate();

  return (
    <fieldset>
        <legend>
            <h2>Show One Product</h2>
        </legend>
        {product&& <>
            <h2>Product Title : {product.title}</h2>
            <p>Product Price : {product.price}</p>
            <p>Product Description : {product.description}</p>
        </>}
        <hr />
        <Link to={`/`}>Back Home</Link>

    </fieldset>
  )
}

export default ShowOneProduct