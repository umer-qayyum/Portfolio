"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ProjectCard from "./project-card";

const projects = [
  {
    title: "Cognify",
    description:
      "AI-powered learning Malaysian platform adapting to individual student needs made for Malaysian Government and MOE",
    problem:
      "Students faced one-size-fits-all education, limiting personalized learning opportunities",
    role: "Senior Engineer & Tech Lead",
    techStack: [
      "React.js",
      "Typescript",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Redis",
      "Twillo",
      "AWS",
    ],
    impact: "50k+ students, 35% improvement in learning outcomes",
  },
  {
    title: "TalentBridge",
    description:
      "Recruitment platform connecting top talent with innovative companies made for Malaysian Government and MOE",
    problem:
      "Tech recruiting was slow and inefficient, failing to match candidates with right opportunities",
    role: "Senior Engineer & Tech Lead",
    techStack: [
      "Next.Js",
      "Nest.js",
      "TypeScript",
      "ExpressJs",
      "MongoDB",
      "Twillo",
      "AWS",
    ],
    impact: "2k+ hires, $800k ARR, 70% faster hiring process",
  },
  {
    title: "E-Invoice SaaS",
    description:
      "Enterprise invoicing platform for SMBs with automated workflows made for Malaysian Company AirAsia Airline",
    problem:
      "Businesses wasted time on manual invoicing, struggling with compliance and cash flow visibility",
    role: "Technical Lead & Architect",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
    impact:
      "5k+ businesses, $1.2M ARR, 60% reduction in invoice processing time",
    featured: true,
  },
  {
    title: "Propertyfy",
    description:
      "Real estate management platform revolutionizing property transactions",
    problem:
      "Real estate agents struggled with fragmented tools and slow transaction processes, losing time and accuracy",
    role: "Lead Full Stack Engineer",
    techStack: ["React.js", "TypeScript", "NodeJs", "SQL"],
    impact: "10k+ active users, $2.5M ARR, 40% faster transactions",
    featured: true,
  },
  {
    title: "AI Detector",
    description:
      "School Dashboard for teacher and students where students submit their assignments and teacher detect the AI generated assignments",
    problem:
      "Students and teachers struggled with fragmented tools and slow assignment submission processes, losing time and accuracy",
    role: "Lead Full Stack Engineer",
    techStack: ["Next.js", "NodeJs", "ExpressJs", "Flask", "Python"],
    impact: "10k+ active users, 4.8★ rating, featured in Google Play Store",
    featured: true,
  },
  {
    title: "Pop Store",
    description:
      "A full-featured eCommerce platform that enables seamless product browsing, cart management, and secure checkout experience.",
    problem:
      "Businesses needed a complete online store solution to efficiently manage sales and provide customers with a smooth digital shopping experience.",
    role: "Lead Full Stack Engineer",
    techStack: ["React.js", "NodeJs", "ExpressJs", "MongoDB"],
    impact: "Enabled businesses to scale online sales with a fast, reliable, and user-friendly shopping experience.",
    featured: true,
  },

  {
    title: "TrackStack",
    description: "Digital legacy platform for Musical World!",
    problem:
      "Musicians and music lovers had no secure way to preserve and pass down their music across generations",
    role: "Full Stack Engineer",
    techStack: ["React-Native Expo", "NodeJs", "MongoDB", "OpenAI"],
    impact: "40k+ musicians, featured in Google Play Store",
  },

  {
    title: "EverAfter",
    description:
      "Digital legacy platform for preserving family memories and stories",
    problem:
      "Families had no secure way to preserve and pass down memories across generations",
    role: "Full Stack Engineer",
    techStack: [
      "React-Native CLI",
      "NestJs",
      "Firebase",
      "Revenucat",
      "Stripe",
      "WebFlow",
    ],
    impact: "100k+ families, 4.8★ rating, featured in TechCrunch",
  },
  {
    title: "PDF Ease",
    description:
      "Browser-based PDF editor with collaborative features and AI-powered insights",
    problem:
      "PDF editing required expensive software, lacked collaboration, and limited accessibility",
    role: "Lead Frontend Engineer",
    techStack: ["React-Native CLI", "PDF.js", "WebWorkers", "Claude API"],
    impact: "500k+ monthly users, 30k+ paying customers",
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      className="py-20 px-4 relative overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`space-y-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Top Projects That <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            From early-stage startups to enterprise platforms, I've built
            systems that serve millions of users and generate significant
            revenue.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`h-full min-h-0 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
