"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Company One",
    title: "Senior Frontend Developer",
    url: "https://example.com",
    period: "2023 — Present",
    points: [
      "Developed and maintained critical UI components used across the product, ensuring consistency and accessibility.",
      "Collaborated with designers and backend developers to implement new features and improve user experience.",
      "Led code reviews and mentored junior developers on best practices and modern web technologies.",
      "Optimized application performance resulting in 40% faster load times.",
    ],
  },
  {
    company: "Company Two",
    title: "Frontend Developer",
    url: "https://example.com",
    period: "2021 — 2023",
    points: [
      "Built responsive web applications using React, Next.js, and Tailwind CSS.",
      "Implemented RESTful API integrations and managed application state effectively.",
      "Participated in agile development processes including sprint planning and retrospectives.",
      "Created reusable component libraries that improved development efficiency by 30%.",
    ],
  },
  {
    company: "Company Three",
    title: "Junior Developer",
    url: "https://example.com",
    period: "2019 — 2021",
    points: [
      "Assisted in developing and maintaining web applications for various clients.",
      "Learned and applied modern JavaScript frameworks and CSS methodologies.",
      "Contributed to improving website accessibility and SEO performance.",
      "Participated in bug fixing and quality assurance testing.",
    ],
  },
]

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl md:text-2xl mr-2">02.</span>
            {"Where I've Worked"}
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-sm font-mono whitespace-nowrap transition-colors text-left ${
                  activeTab === index
                    ? "text-primary bg-secondary border-b-2 md:border-b-0 md:border-l-2 border-primary md:-ml-px"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[300px]">
            <h3 className="text-xl font-medium text-foreground mb-1">
              {experiences[activeTab].title}{" "}
              <a
                href={experiences[activeTab].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                @ {experiences[activeTab].company}
                <ExternalLink size={14} />
              </a>
            </h3>
            <p className="text-muted-foreground font-mono text-sm mb-6">
              {experiences[activeTab].period}
            </p>
            <ul className="space-y-3">
              {experiences[activeTab].points.map((point, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-muted-foreground leading-relaxed"
                >
                  <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
