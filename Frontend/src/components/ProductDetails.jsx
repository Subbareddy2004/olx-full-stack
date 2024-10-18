import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  // Create a function to get the full image URL
  const getImageUrl = (imagePath) => {
    return `http://localhost:5000/${imagePath}`;
  }

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error))
  }, [id])

  if (!product) return <div>Loading...</div>

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mx-auto">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={getImageUrl(product.image)} alt={product.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category}</div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{product.title}</h2>
          <p className="mt-2 text-gray-500">{product.description}</p>
          <p className="mt-2 text-gray-900">Price: ${product.price}</p>
          <p className="mt-2 text-gray-900">Condition: {product.condition}</p>
          <p className="mt-2 text-gray-900">Seller: {product.seller?.name || 'Unknown'}</p>
          <p className="mt-2 text-gray-900">Contact: {product.seller?.email || 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
