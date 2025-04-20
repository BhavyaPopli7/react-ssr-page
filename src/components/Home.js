import React from 'react';
import '../css/Home.css'
import '../css/About.css'
import '../css/Contact.css'
import { useState } from 'react';
import homeimage1 from '../assets/homeimage1.png';
import homeimage2 from '../assets/homeimage2.png';
import homeimage3 from '../assets/homeimage3.png';

const Home = () => {
    
    const imagePath = '/images/homeimage.png';
    const image1 = '/images/homeimage1.png';
    const image2 = '/images/homeimage2.png';
    const image3 = '/images/homeimage3.png';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleSubmit = (e) => {
            e.preventDefault();
    
            alert("Thank you for contacting OurBus. Our team will respond shortly.");
    
            setFormData({ name: '', email: '', message: '' });
      }

    return (
      <div className='home-container'>
        <img src="/images/homeimage.png" alt="BusImage" className='banner-image' />
  
        <div className="images-section">
          <img src="/images/homeimage1.png" alt="Bus 1" className="section-image" />
          <img src="/images/homeimage2.png" alt="Bus 2" className="section-image" />
          <img src="/images/homeimage3.png" alt="Bus 3" className="section-image" />
        </div>


      <div className="about-page" style={{marginTop:"50px"}}>
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
      </div>

     <div className="contact-page" style={{marginTop:"50px"}}>
        <header className="contact-header">
          <h1>Contact OurBus</h1>
        </header>

        <section className="contact-content">
          <h2>Get in Touch</h2>
          <p>
            Have questions, feedback, or need help with your booking? Our team is here to assist you.
            Reach out using the form below or contact us through the information provided.
          </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder="Your Name" value={formData.name} required  onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
          <input type="email" name='email' placeholder="Your Email" value={formData.email} required  onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
          <textarea placeholder="Your Message" name='message' rows="5" value={formData.message} required  onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
          <button type="submit">Send Message</button>
        </form>


          <div className="contact-info">
            <p><strong>Email:</strong> support@ourbus.com</p>
            <p><strong>Phone:</strong> +1 (800) 123-4567</p>
            <p><strong>Address:</strong> 123 Bus Street, Cityville, Country</p>
          </div>
        </section>

        <footer className="contact-footer">
         &copy; 2025 OurBus. All rights reserved.
        </footer>
    </div>

    </div>
    );
};

export default Home;