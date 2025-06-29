import React from 'react'
import ProductCard from './ProductCard';

function ProductList({users,i}) {
  return (
    <div>
     <ProductCard key={i} {...users}/>
    </div>
  );
}

export default ProductList