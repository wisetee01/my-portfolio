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

            {/* Add more projects */}

            <ProjectCard
              title=" Intelligent E-commerce Order Automation Bot with GCS Integration"
              description="This project is a robust, hybrid AI business assistant built to streamline the e-commerce ordering process. It intelligently guides customers through collecting all necessary details
               (item specifics, contact info, payment method), handles secure payment proof uploads via Google Cloud Storage (GCS), and automates the final confirmation and notification processes.
              The key feature is a fault-tolerant, dual-model AI system that ensures a seamless user experience while providing business owners with an efficient, manual verification workflow that sends all 
               data and links directly via email for immediate processing."
              image="business-assistance.png"
              demoUrl="https://business-assistance-okms.onrender.com"
              githubUrl="https://github.com/wisetee01/business-assistance"
              tags={[ 'Python (FastAPI)', 'Pydantic','OpenAI', 'Google Gemini', 'MongoDB', 'Google Cloud Storage', 'SendGrid', 'HTML', 'CSS', 'JavaScript', ]}
            />

            

            <ProjectCard
              title="Ecommerce-API"
              description="Built a full-stack e-commerce platform with Node.js, Express, MongoDB, JWT auth, Paystack payments, Cloudinary uploads,
               deployed on Render  Features user registration, cart, checkout, admin panel, and responsive UI.
               It's a solid starter product — especially for startups or small companies needing quick e-commerce backend.
                Covers 80% of e-commerce needs. 30+ Pro Core Features and can Handles 1k+ users/day.."
              image="commerce-api1.jpg"
              demoUrl="https://ecommerce-api-1-w70q.onrender.com"
              githubUrl=""
              tags={['Node.js', 'Express', 'MongoDB', 'JWT auth','bcrypt','CloudinaryStorage',
              'nodemailer','multer',]}
            />

            <ProjectCard
              title="To-DO-API"
              description="To-Do API (Node.js)
              A secure, full-featured REST API for task management.
              Features:
              JWT Auth + Google Login
               Create, Read, Update, Delete Tasks
               MongoDB Atlas backend"
              image="todo-api.jpg"
              demoUrl="https://todo-api-rgzv.onrender.com"
              githubUrl="https://github.com/wisetee01/Todo-api"
              tags={['Node.js', 'Express', 'MongoDB', 'JWT auth','bcrypt',]}
            />

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