export default function HeroSection() {
  return (
    <section className="hero-section container">
      <div className="hero-image">
        <img src="mypic2.jpg" alt="Taiwo-oriyomi" loading="lazy" />
      </div>
      <div className="hero-content">
        <h2> 👋Hi, I'm <span className="highlight">Taiwo Oriyomi</span></h2>
        <p className="tagline">I build <strong>fast</strong>, <strong>accessible</strong>, and <strong>pixel-perfect</strong> web experiences.</p>
        <p>I’m a developer experienced in building websites for small and medium-sized businesses.<strong></strong> — Whether you’re trying to win work, list your services, or create a new online store, I can help.</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="https://github.com/wisetee01" target="_blank" rel="noopener" className="btn secondary">GitHub</a>
        </div>
      </div>
    </section>
  )
}