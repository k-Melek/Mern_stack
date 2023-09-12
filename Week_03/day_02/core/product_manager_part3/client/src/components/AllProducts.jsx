import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

  const fetchProducts = () => {
    axios
      .get('http://localhost:8000/api/product')
      .then((serverResponse) => {
        console.log('***My products : ', serverResponse.data);
        setProducts(serverResponse.data);
      })
      .catch((serverError) => console.log(serverError, '❌❌❌'));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete('http://localhost:8000/api/product/' + id)
      .then((serverResponse) => {
        console.log('Server Response : ', serverResponse);
        // Remove the deleted product from the list
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
      })
      .catch((serverError) => {
        console.log('Server Error : ', serverError);
      });
  };

  return (
    <fieldset>
      <legend>
        <h2>All Products</h2>
      </legend>
      <ol>
        {products.map((product) => (
          <div key={product._id}>
            <li>
              <button>
                <Link to={`/${product._id}`}>{product.title}</Link>
              </button>
              <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </li>
            <hr />
          </div>
        ))}
      </ol>
    </fieldset>
  );
};

export default AllProducts;
