export default function About() {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind', 'Git', 'Figma', 'WCAG','Vite','Vue']

  return (
    <section id="about" className="container section">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div>
          <p><strong>A passionate frontend developer dedicated to building visually stunning and user-friendly web applications</strong>. I specialize in crafting responsive, high-performance interfaces that deliver seamless user experiences.
        With expertise in <strong>HTML, CSS, JavaScript, TypeScript,</strong> and modern frameworks like <strong>React and Vue</strong>, I focus on writing clean, maintainable code while ensuring accessibility and performance.
        I thrive in collaborative environments and enjoy turning ideas into functional, engaging digital experiences.Responsive Design & UI/UX Best Practices I’m constantly exploring new technologies and refining my skills through hands-on projects. 
        🚀 Open to new opportunities and collaborations! If you need a detail-oriented developer to bring your vision to life, let’s connect and create something amazing.</p>
          <p>I turn designs into <strong>production-ready code</strong> with a focus on performance, accessibility, and clean UX.</p>
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