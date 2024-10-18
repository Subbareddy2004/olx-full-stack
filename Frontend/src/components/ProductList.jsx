import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log('Fetching products...');
    fetch('/api/products')
      .then(response => {
        console.log('Response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        setProducts(data);
      })
      .catch(error => console.error('Error:', error));
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
