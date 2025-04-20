import React from 'react'

const NotFound = () => {
  return (
    <div className="notfound-page">
    <div className="notfound-content">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="home-link">Go Back Home</a>
    </div>
  </div>
  )
}

export default NotFound
