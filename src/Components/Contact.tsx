import { useState } from 'react'

export default function Contact() {
  return (
    <section id="contact" className="container section">
      <h2 className="section-title">Get in Touch</h2>
      <p>Have a project in mind? Let's talk.</p>

      <form
        action="https://formspree.io/f/mnnovopw"  // ← CHANGE THIS
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="your@email.com" required />
        <textarea name="message" placeholder="Your Message" rows={5} required />
        <button type="submit" className="btn primary">Send Message</button>
      </form>

      <p className="social">
        <a href="https://linkedin.com/in/taiwo-oriyomi" target="_blank" rel="noopener">LinkedIn</a> • 
        <a href="https://github.com/wisetee01" target="_blank" rel="noopener">GitHub</a> • 
        <a href="wisetee01@gmail.com">Email</a>
      </p>
    </section>
  )
}