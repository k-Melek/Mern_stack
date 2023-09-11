import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {

    const [product, setProduct] = useState({
        title:"",
        price:1,
        description:""
    });

    const handleForm = (e) => {
        e.preventDefault();
        console.log("Submitted Object : ", product);
        axios.post("http://localhost:8000/api/product", product)
                .then(serverResponse => console.log(serverResponse))
                .catch(serverError => console.log(serverError));
        setProduct({
            title:"",
            price:1,
            description:""
        })
    };


  return (
    <fieldset>
        <legend><h2>Add a Product</h2></legend>
        <form onSubmit={handleForm}>
            <p>Title : <input type="text" 
                onChange={(e) => setProduct({...product, title:e.target.value})}
                value={product.title}
            /></p>
            <p>Price : <input type="number"
                onChange={(e) => setProduct({...product, price:e.target.value})}
                value={product.price}
            /></p>
            <p>Descriptiont : <input type="text" 
                onChange={(e) => setProduct({...product, description:e.target.value})}
                value={product.description}
            /></p>
            <button>Create</button>
        </form>
    </fieldset>
  )
}

export default ProductForm