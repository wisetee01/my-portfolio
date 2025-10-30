import Header from  "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ProjectCard from "./Components/ProjectCard";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section id="projects" className="container section">
          <h2 className="section-title">Our Projets</h2>
          <div className="grid">
             <ProjectCard
              title="Tapify"
              description="Tapify is a streamlined digital marketing platform designed to facilitate seamless sales closures. Featuring an intuitive registration page, 
              it instantly displays bank details upon submission, guiding users effortlessly to contact support—all within a single, unified interface."
              image="tapi.jpg"
              demoUrl="https://tapifysite.vercel.app/"
              githubUrl="https://github.com/wisetee01/tapifysite"
              tags={['HTML', 'CSS', 'JavaScript', 'Flexbox',]}
            />
            <ProjectCard
              title="To Do List"
              description="A to do list that stores tasks locally"
              image="todo.jpg"
              demoUrl="https://to-do-listt-six.vercel.app/"
              githubUrl="https://github.com/wisetee01/To-Do-List"
              tags={['HTML', 'CSS', 'JavaScript',]}
            />
            {/* Add more projects */}
          </div>
        </section>
        <About />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Taiwo-O. Built with React + Vite.</p>
        </div>
      </footer>
    </>
  )
}

export default App