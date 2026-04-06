const skills = [
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "HTML & CSS",
  "Tailwind CSS",
  "Node.js",
  "Git & GitHub",
  "Responsive Design",
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {"Hello! I'm a passionate developer who loves building things that live on the internet. My interest in web development started back in 2018 when I decided to try customizing a blog theme — turns out hacking together HTML & CSS taught me a lot!"}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"Fast-forward to today, and I've had the privilege of working with various projects and technologies. My main focus these days is building accessible, inclusive products and digital experiences."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"Here are a few technologies I've been working with recently:"}
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group mx-auto md:mx-0">
            <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square">
              <div className="absolute inset-0 bg-primary/20 rounded transition-all duration-300 group-hover:bg-transparent" />
              <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative w-full h-full rounded overflow-hidden bg-secondary">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
