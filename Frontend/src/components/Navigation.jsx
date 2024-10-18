import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navigation({ user, setUser }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token') // Remove the token
    navigate('/')
  }

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Fashion Marketplace</Link>
        <div>
          {user ? (
            <>
              <Link to="/sell" className="mr-4">Sell Item</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
