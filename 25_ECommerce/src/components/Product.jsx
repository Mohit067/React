import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Loader from "./Loader";

function Product() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true)
    let response = await axios("https://fakestoreapi.com/products");
    setProduct(response.data);
    setIsLoading(false)
  };
  useEffect(() => {
    fetchData();
  }, []);

  if(isLoading) return <Loader />
  
  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-4
      p-4
    "
    >
      {product.map((item, index) => {
        return <ProductCart item={item} key={index} />;
      })}
    </div>
  );
}

export default Product;
