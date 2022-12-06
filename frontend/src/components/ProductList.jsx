import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await axios.get(`http://localhost:5000/product`);
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    const response = window.confirm("Yakin hapus data ini ?");
    if (response) {
      try {
        await axios.delete(`http://localhost:5000/product/${productId}`);
        getProduct();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="row mb-3">
          <div className="col col-3">
            <Link to="/add" className="btn btn-primary">
              Add Product
            </Link>
          </div>
        </div>
        {products.map((item) => (
          <div key={item.id} className="col col-3 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="d-flex justify-content-around">
                  <Link
                    to={`/edit/${item.id}`}
                    className="btn btn-warning w-50"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(item.id)}
                    href="#"
                    className="btn btn-danger w-50 ms-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
