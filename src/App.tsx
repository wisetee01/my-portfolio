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
              title="GymFlex"
              description="Turn Figma To Code. In this project, I transformed a comprehensive GymFlex Figma design into a fully functional,
               pixel-perfect web application. 
              This was more than a conversion; it was a meticulous reconstruction of the design's vision, demonstrating an advanced
               understanding of modern development principles and a seamless
               approach to bridging the gap between design and code."
              image="gymflex.jpg"
              demoUrl="https://gymflex-rho.vercel.app/"
              githubUrl="https://github.com/wisetee01/gymflex"
              tags={['HTML', 'CSS', 'JavaScript',]}
            />
            
            <ProjectCard
              title="Solar App"
              description="A responsive solar monitoring app with real-time dashboard, dynamic charts, geolocation-based weather simulation,
               automated toast alerts for maintenance & performance, collapsible FAQ support, and social sharing buttons."
              image="solar.jpg"
              demoUrl="https://solar-app-eosin.vercel.app/"
              githubUrl="https://github.com/wisetee01/solar-app"
              tags={['HTML', 'CSS', 'JavaScript',]}
            />

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