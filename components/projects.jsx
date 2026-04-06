import { ExternalLink, Github, Folder } from "lucide-react"

const featuredProjects = [
  {
    title: "Project One",
    description:
      "A full-stack web application that helps users manage their tasks efficiently. Built with modern technologies and focusing on user experience and accessibility.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/project1.png",
  },
  {
    title: "Project Two",
    description:
      "An e-commerce platform with advanced filtering, search functionality, and seamless checkout experience. Features real-time inventory updates.",
    tech: ["JavaScript", "React", "CSS", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/project2.png",
  },
  {
    title: "Project Three",
    description:
      "A responsive portfolio website template with dark mode support, smooth animations, and optimized performance for fast loading times.",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/project3.png",
  },
]

const otherProjects = [
  {
    title: "Weather App",
    description: "A simple weather application that displays current weather and forecasts based on user location.",
    tech: ["JavaScript", "API", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Todo List",
    description: "A minimalist todo application with local storage persistence and drag-and-drop functionality.",
    tech: ["React", "CSS", "Local Storage"],
    github: "https://github.com",
  },
  {
    title: "Calculator",
    description: "A functional calculator with keyboard support and a clean, modern interface.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Quiz Game",
    description: "An interactive quiz game with multiple categories and difficulty levels.",
    tech: ["React", "API", "Tailwind"],
    github: "https://github.com",
  },
  {
    title: "Blog Platform",
    description: "A markdown-based blog platform with syntax highlighting and responsive design.",
    tech: ["Next.js", "MDX", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with room creation and message persistence.",
    tech: ["React", "Socket.io", "Node.js"],
    github: "https://github.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">03.</span>
            Some Things {"I've"} Built
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 relative group ${
                  index % 2 === 1 ? "md:col-start-6 md:row-start-1" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded bg-secondary aspect-video">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="w-full h-full flex items-center justify-center">
                    <Folder className="w-16 h-16 text-muted-foreground/50" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-6 md:row-start-1 relative z-10 ${
                  index % 2 === 1 ? "md:col-start-1" : "md:col-start-6"
                }`}
              >
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded shadow-lg mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-bold text-foreground">
            Other Noteworthy Projects
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <Folder className="text-primary" size={40} />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm flex-1 mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
