import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom";


const ShowOneProduct = (props) => {
    

    const [product,setProduct] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    },[id])

    const deleteProduct = (id) => {
        axios
            .delete('http://localhost:8000/api/product/' + id)
            .then((serverResponse) => {
                console.log('Server Response : ', serverResponse)
                navigate('/')
            })
            .catch((serverError) => {
                console.log('Server Error : ', serverError);
            })
    }

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
        <div>
            <button><Link to={'/'}>Back Home</Link> </button>
            <button><Link to={`/${id}/edit`}>Edit</Link></button>
            <button onClick={()=>deleteProduct(product._id)}>Delete</button>
            
        </div>
        

    </fieldset>
  )
}

export default ShowOneProduct