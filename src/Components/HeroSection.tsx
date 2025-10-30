export default function HeroSection() {
  return (
    <section className="hero-section container">
      <div className="hero-image">
        <img src="profile.jpg" alt="Taiwo-oriyomi" loading="lazy" />
      </div>
      <div className="hero-content">
        <h2> 👋Hi, I'm <span className="highlight">Taiwo Oriyomi</span></h2>
        <p className="tagline"> I build <strong>fast</strong>, <strong>accessible</strong>, and <strong>pixel-perfect</strong> web experiences.</p>
        <span> A Responsive Websites That Convert</span>
        <p>Figma to Code • React Landing Pages • Bug Fixes • 48-Hr Delivery</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="https://github.com/wisetee01" target="_blank" rel="noopener" className="btn secondary">GitHub</a>
          <a href="#contact">Get Your Site Fixed in 48hrs → Special</a>
        </div>
      </div>
    </section>
  )
}