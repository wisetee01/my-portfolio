export default function About() {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind', 'Git', 'Figma', 'WCAG','Vite','Vue', 'Node.js', 'Python', 'Ai Interegation', 'APIs', 'Full-Stack']

  return (
    <section id="about" className="container section">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div>
          <p><strong>A passionate Full-Stack Software developer & Ai Engineer dedicated to building visually stunning,accessible,and intelligent web applications</strong> that blend seamless UX with AI-powered functionality. I specialize in crafting responsive, high-performance interfaces that deliver seamless user experiences.
        With expertise in <strong>FrontEnd: HTML, CSS, JavaScript, TypeScript,React,vue,WCAG,Tailwind,Vite,</strong> and BackEnd & AI:<strong> Node.js,Python,APIs,Machine Learning, Generative AI,</strong>Tools : <strong> Git,Figma,Responsive Design,UI/UX Best Practices.</strong><strong>I deliver clean, high-performace,maintainable code --from pixel-perfect interface to smart chatbots that remember,search,and act.</strong>
        I thrive in collaborative environments and enjoy turning ideas into functional, engaging digital experiences.Responsive Design & UI/UX Best Practices I’m constantly exploring new technologies and refining my skills through hands-on projects. 
        🚀 Open to new opportunities and collaborations & full-time roles. If you need a detail-Full-Stack Software & Ai Engineer to bring your vision to life, let’s connect and build the future---together.</p>
          <p>I turn designs into <strong>production-ready code</strong> with a focus on performance, accessibility, and clean UI/UX.</p>
          <p>Obsessed with <strong>Flexbox</strong>, <strong>semantic HTML</strong>, and <strong>vanilla JS</strong> solutions that just work.</p>
          <p>Currently building tools that help businesses close sales faster.</p>
        </div>
        <div className="skills">
          <h3>Tech Stack</h3>
          <ul>
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}