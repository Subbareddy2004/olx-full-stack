import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem({ product }) {
  // Create a function to get the full image URL
  const getImageUrl = (imagePath) => {
    return `http://localhost:5000/${imagePath}`;
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={getImageUrl(product.image)} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{product.title}</h3>
        <p className="text-gray-700 text-base mb-2">${product.price}</p>
        <Link to={`/product/${product._id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default ProductItem
