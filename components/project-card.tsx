import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  role: string;
  techStack: string[];
  impact: string;
  image?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  problem,
  role,
  techStack,
  impact,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative flex h-full min-h-0 flex-col bg-card-gradient border border-border rounded-xl p-6 hover-lift overflow-hidden transition-all ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300 -z-10"></div>

      <div className="relative flex min-h-0 flex-1 flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-start gap-3">
          <div className="min-w-0">
            <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-cyan-700 dark:text-cyan-400 font-semibold mt-1">{role}</p>
          </div>
          <ArrowUpRight className="w-5 h-5 shrink-0 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Problem Statement */}
        <div>
          <p className="text-xs font-semibold text-secondary-foreground mb-1">
            Problem:
          </p>
          <p className="text-sm text-muted-foreground">{problem}</p>
        </div>

        {/* Impact */}
        <div className="pt-2">
          <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 mb-1">Impact:</p>
          <p className="text-sm text-foreground">{impact}</p>
        </div>

        {/* Tech Stack — pinned to bottom of card for equal row heights */}
        <div className="mt-auto flex flex-wrap gap-2 pt-3 border-t border-border/60">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 bg-cyan-600/10 border border-cyan-600/25 rounded text-cyan-800 dark:bg-cyan-500/10 dark:border-cyan-500/30 dark:text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
