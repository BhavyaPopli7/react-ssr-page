import React from 'react'
import '../css/About.css'

const About = () => {
  return (
    <div className="about-page">
    <header className="about-header">
      <h1>About OurBus</h1>
    </header>

    <section className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to OurBus – your trusted travel partner across the city and beyond.
            With a commitment to safety, comfort, and affordability, we offer a seamless travel experience
            to thousands of passengers every day.
          </p>
          <p>
            Our fleet is equipped with modern amenities and operated by highly trained drivers. Whether you’re
            commuting daily or planning a trip, OurBus ensures a reliable and eco-friendly journey.
          </p>
          <p>
            We aim to make public transportation accessible and convenient. Join us on a journey where
            punctuality meets comfort, and sustainability meets innovation.
          </p>
        </section>

        <footer className="about-footer">
          &copy; 2025 OurBus. All rights reserved.
        </footer>
  </div>
  )
}

export default About
