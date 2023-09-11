import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const AllProducts = (props) => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((serverResponse) =>{
            console.log("***My products : ",serverResponse.data)
            setProducts(serverResponse.data)
        })
        .catch((serverError) => console.log(serverError, "❌❌❌"));
    },[])

  return (
    <fieldset>
        <legend><h2>All Products</h2></legend>
        <ol>
            {products.map((product) =>(
            <div key={product._id}>
                <li
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/${product._id}`)}
                >{product.title}</li>
                
                <Link to={`/${product._id}`}>{product.title}</Link>
                <hr />
            </div>
            ))}
        </ol>
    </fieldset>
    
  )
}

export default AllProducts