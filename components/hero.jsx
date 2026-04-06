"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Your Name.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 text-balance">
          I build things for the web.
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          {"I'm a frontend developer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="px-8 py-4 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
          >
            Check out my work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-medium"
          >
            Get in touch
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="text-muted-foreground hover:text-primary transition-colors" size={28} />
        </Link>
      </div>
    </section>
  )
}
