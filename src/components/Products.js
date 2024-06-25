import React, { useState, useEffect } from "react";
import "./Products.css";
import axios from "axios";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //only 12 products
  products.length = 12;
  return (
    <>
      <div className="products row">
        {products &&
          products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mt-2">
              <div className="product-content">
                <h2>{product.title} </h2>
                <p description>{product.description}</p>
                <img src={product.image} alt="img" />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
export default Products;
