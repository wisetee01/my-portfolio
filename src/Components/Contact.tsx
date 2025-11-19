import { useState } from 'react'

export default function Contact() {
  return (
    <section id="contact" className="container section">
      <h2 className="section-title">Get in Touch</h2>
      <p>Have a project in mind? Let's talk.</p>

      <form
        action="https://formspree.io/f/mnnovopw"  // ← CHANGE THIS
        method="POST"
        className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="your@email.com" required />
        <select name="service" required>
        <option value="">Choose Service</option>
        <option>Landing Page</option>
        <option>Bug Fixes</option>
        <option>React Page</option>
        <option>Ai Integration</option>
        <option>Custom Project</option>
    </select>
      <textarea name="message" placeholder="Tell me about your project..." rows={5} required></textarea>
        <button type="submit" className="btn primary">Send Message → Get FeedBack in 5min</button>
      </form>

      <p className="social">
        <a href="https://linkedin.com/in/taiwo-oriyomi" target="_blank" rel="noopener">LinkedIn</a> • 
        <a href="https://github.com/wisetee01" target="_blank" rel="noopener">GitHub</a> • 
        <a href="wisetee01@gmail.com">Email</a>
      </p>
    </section>
  )
}