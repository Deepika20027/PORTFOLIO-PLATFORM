import { Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-primary font-mono text-sm mb-4">04. {"What's"} Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          {"I'm currently looking for new opportunities. Whether you have a question, want to collaborate on a project, or just want to say hi, my inbox is always open. I'll try my best to get back to you!"}
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-lg"
        >
          <Mail size={20} />
          Say Hello
        </a>
      </div>
    </section>
  )
}
