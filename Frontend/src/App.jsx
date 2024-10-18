import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ProductList from './components/ProductList'
import SellForm from './components/SellForm'
import Login from './components/Login'
import Register from './components/Register'
import ProductDetails from './components/ProductDetails'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen">
        <Navigation user={user} setUser={setUser} />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route 
              path="/sell" 
              element={
                <PrivateRoute user={user}>
                  <SellForm />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
