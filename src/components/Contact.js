import React from 'react'
import { useState } from 'react';
import '../css/Contact.css'

const Contact = () => {

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
    <div className="contact-page">
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
  </div>  )
}

export default Contact
