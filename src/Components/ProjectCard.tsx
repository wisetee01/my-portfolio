interface ProjectCardProps {
  title: string
  description: string
  image: string
  demoUrl: string
  githubUrl: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, demoUrl, githubUrl, tags }: ProjectCardProps) {
  return (
    <article className="card" tabIndex={0}>
      <img src={image} alt={`${title} demo`} loading="lazy" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="badges">
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="links">
          <a href={demoUrl} target="_blank" rel="noopener" className="btn-sm">Live Demo</a>
          <a href={githubUrl} target="_blank" rel="noopener" className="link">GitHub</a>
        </div>
      </div>
    </article>
  )
}