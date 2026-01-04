import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ProductCart from './ProductCart';

function ProductWithUseLoader() {
    const product = useLoaderData();
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

export default ProductWithUseLoader