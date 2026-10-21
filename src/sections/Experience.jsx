import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "May 2026 — Jun 2026",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    description:
      "Contributed to open-source projects focusing on Artificial Intelligence and JavaScript, collaborating remotely with a global community of developers.",
    technologies: ["JavaScript", "AI", "Git", "Open Source"],
    current: false,
  },
  {
    period: "May 2025 — Apr 2026",
    role: "Head of Outreach",
    company: "CodeDay Dehradun",
    description:
      "Organized the first-ever CodeDay in Uttarakhand. Managed logistics, community outreach, and operations to host a massive 12-hour youth programming hackathon.",
    technologies: ["Community Building", "Logistics", "Event Management"],
    current: false,
    link: "https://www.codeday.in/en-us", // Add your CodeDay / Hack Club link here
  },
  {
    period: "Jul 2023 — Dec 2025",
    role: "Founder & Java Instructor",
    company: "Project CodeClimb",
    description:
      "Initiated a grassroots effort teaching Java programming to 80+ students from under-resourced schools. Focused on breaking down complex OOP concepts and building students' technical confidence.",
    technologies: ["Java", "OOP", "Teaching", "Leadership"],
    current: false,
  },
  {
    period: "Jun 2023 — Sep 2025",
    role: "Assistant Web Designer",
    company: "Website Banaye (Local Business)",
    description:
      "Designed and developed frontend layouts for 10+ local business clients. Integrated AI automation into design workflows and created client-focused, mobile-responsive interfaces.",
    technologies: ["HTML", "Tailwind CSS", "Figma", "UI/UX"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience built on{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              real impact.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my growth—from empowering local students with code to delivering digital solutions for regional businesses.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 flex items-center gap-2 justify-start md:justify-end">
                      {idx % 2 !== 0 && exp.link && (
                        <a href={exp.link} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {exp.role}
                      {idx % 2 === 0 && exp.link && (
                        <a href={exp.link} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4 text-left md:text-right">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};