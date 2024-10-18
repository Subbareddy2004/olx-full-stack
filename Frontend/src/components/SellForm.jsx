import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SellForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    condition: '',
    image: null
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    for (const key in formData) {
      data.append(key, formData[key])
    }

    try {
      const token = localStorage.getItem('token') // Get the token from localStorage
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}` // Include the token in the Authorization header
        },
        body: data
      })
      if (response.ok) {
        navigate('/')
      } else {
        // Handle error
        console.error('Failed to create product:', await response.text())
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Sell an Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 mb-4 border rounded"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 mb-4 border rounded"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-2 mb-4 border rounded"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full p-2 mb-4 border rounded"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="condition"
          placeholder="Condition"
          className="w-full p-2 mb-4 border rounded"
          value={formData.condition}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          List Item
        </button>
      </form>
    </div>
  )
}

export default SellForm
