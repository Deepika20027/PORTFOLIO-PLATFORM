import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  { name: "Email", icon: Mail, url: "mailto:your.email@example.com" },
]

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto">
        {/* Social Links - Mobile Only */}
        <div className="flex justify-center gap-6 mb-6 md:hidden">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              aria-label={social.name}
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>

        {/* Side Social Links - Desktop */}
        <div className="hidden md:flex fixed bottom-0 left-10 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              aria-label={social.name}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Side Email - Desktop */}
        <div className="hidden md:flex fixed bottom-0 right-10 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
          <a
            href="mailto:your.email@example.com"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono tracking-widest"
            style={{ writingMode: "vertical-rl" }}
          >
            your.email@example.com
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
          >
            <p>Designed & Built by Your Name</p>
            <p className="mt-1 text-xs">2024</p>
          </a>
        </div>
      </div>
    </footer>
  )
}
