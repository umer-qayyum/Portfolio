"use client";

import { useEffect, useMemo, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type SkillLevel = "Expert" | "Advanced" | "Proficient";

type SkillItem = {
  name: string;
  level: SkillLevel;
};

type SkillCategory = {
  id: string;
  label: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "Javascript", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "ElectronJs", level: "Advanced" },
      { name: "Mobile Dev", level: "Advanced" },
      { name: "React Native (CLI)", level: "Expert" },
      { name: "React Native (Expo)", level: "Advanced" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "NestJS", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "Microservices", level: "Expert" },
      
      { name: "AWS", level: "Expert" }, 
      { name: "GraphQL", level: "Expert" },
      { name: "Prisma", level: "Expert" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "MongoDB", level: "Expert" },
      { name: "Firebase", level: "Advanced" },
      { name: "Supabase", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Expert" },
      { name: "Oracle", level: "Expert" },
      { name: "Redis", level: "Advanced" },
    ],
  },
  {
    id: "ai-tools",
    label: "AI & Tools",
    skills: [
      { name: "Git", level: "Expert" },
      { name: "GitHub", level: "Expert" },
      { name: "Postman", level: "Expert" },
      { name: "Figma", level: "Expert" },
      { name: "Claude", level: "Advanced" },
      { name: "Vercel AI SDK", level: "Advanced" },
      { name: "LLM Integration", level: "Expert" },
      { name: "Prompt Engineering", level: "Advanced" },
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    skills: [
      { name: "Team Building", level: "Expert" },
      { name: "Architecture", level: "Expert" },
      { name: "Mentorship", level: "Expert" },
      { name: "Product Strategy", level: "Advanced" },
      { name: "Agile", level: "Advanced" },
    ],
  },
];

const filters: { id: string; label: string }[] = [
  // { id: "all", label: "All" },
  ...skillCategories.map((c) => ({ id: c.id, label: c.label })),
];

function levelStyles(level: SkillLevel) {
  switch (level) {
    case "Expert":
      return "border-cyan-600/40 bg-cyan-600/12 text-cyan-800 dark:border-cyan-500/45 dark:bg-cyan-500/15 dark:text-cyan-300";
    case "Advanced":
      return "border-blue-600/35 bg-blue-600/10 text-blue-900 dark:border-blue-400/35 dark:bg-blue-500/12 dark:text-blue-300";
    case "Proficient":
      return "border-border bg-muted/60 text-muted-foreground";
    default:
      return "";
  }
}

/** Bar fill width: Expert full, Advanced strong, Proficient mid */
function levelPercent(level: SkillLevel) {
  switch (level) {
    case "Expert":
      return 95;
    case "Advanced":
      return 75;
    case "Proficient":
      return 60;
    default:
      return 0;
  }
}

/** Solid fill + subtle glow — one hue per level, matches site cyan / blue / slate accents */
function levelBarFill(level: SkillLevel) {
  switch (level) {
    case "Expert":
      return "bg-cyan-600 shadow-[0_0_10px_-2px] shadow-cyan-500/45 dark:bg-cyan-500 dark:shadow-cyan-400/35";
    case "Advanced":
      return "bg-blue-600 shadow-[0_0_10px_-2px] shadow-blue-500/35 dark:bg-blue-500 dark:shadow-blue-400/30";
    case "Proficient":
      return "bg-slate-500 shadow-[0_0_8px_-2px] shadow-slate-500/30 dark:bg-slate-400 dark:shadow-slate-400/25";
    default:
      return "bg-muted-foreground";
  }
}

function levelBarTrack(level: SkillLevel) {
  switch (level) {
    case "Expert":
      return "border-cyan-600/25 bg-cyan-600/10 dark:border-cyan-500/30 dark:bg-cyan-500/10";
    case "Advanced":
      return "border-blue-600/25 bg-blue-600/10 dark:border-blue-500/30 dark:bg-blue-500/10";
    case "Proficient":
      return "border-border bg-muted/70 dark:bg-muted/40";
    default:
      return "border-border bg-muted/50";
  }
}

function SkillProficiencyBar({
  level,
  sectionVisible,
  delayMs,
}: {
  level: SkillLevel;
  sectionVisible: boolean;
  delayMs: number;
}) {
  const pct = levelPercent(level);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (!sectionVisible) {
      setFilled(false);
      return;
    }
    const id = requestAnimationFrame(() => setFilled(true));
    return () => cancelAnimationFrame(id);
  }, [sectionVisible]);

  const showFill = sectionVisible && filled;

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-muted-foreground">
        <span>Mastery</span>
        <span className="tabular-nums text-foreground">{pct}%</span>
      </div>
      <div
        className={cn(
          "h-3.5 w-full overflow-hidden rounded-full border",
          levelBarTrack(level),
        )}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label={`${level} proficiency, charted at ${pct} percent`}
      >
        <div
          className={cn(
            "h-full max-w-full rounded-full motion-reduce:transition-none motion-reduce:duration-0 transition-[width] duration-[850ms] ease-out",
            levelBarFill(level),
          )}
          style={{
            width: showFill ? `${pct}%` : "0%",
            transitionDelay: showFill ? `${delayMs}ms` : "0ms",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState<string>("frontend");

  const displayedSkills = useMemo(() => {
    const cat = skillCategories.find((c) => c.id === activeFilter);
    return (cat?.skills ?? []).map((skill) => ({
      ...skill,
      category: cat!.label,
    }));
  }, [activeFilter]);

  return (
    <section
      id="skills"
      className="py-20 px-4 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            "space-y-4 mb-10 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Filter by domain, then scan proficiency at a glance—every tile is a
            tool or practice I use in production.
          </p>
        </div>

        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-2 mb-10 transition-all duration-700 delay-75",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
          role="tablist"
          aria-label="Skill categories"
        >
          {filters.map((f) => {
            const selected = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveFilter(f.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border",
                  selected
                    ? "bg-cyan-600 text-white border-cyan-600 dark:bg-cyan-500 dark:text-black dark:border-cyan-500 shadow-sm"
                    : "bg-card/60 text-muted-foreground border-border hover:text-foreground hover:border-cyan-600/40 dark:hover:border-cyan-500/40",
                )}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div
          key={activeFilter}
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 transition-all duration-500 ",
            isVisible ? "opacity-100" : "opacity-0",
          )}
        >
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${skill.category}`}
              className={cn(
                "group relative min-h-[9.5rem] sm:min-h-[8.5rem] bg-card-gradient border border-border rounded-xl px-5 py-5 sm:px-6 sm:py-6 flex flex-col hover-lift transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              )}
              style={{
                transitionDelay: isVisible
                  ? `${Math.min(index, 11) * 45}ms`
                  : "0ms",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/[0.07] group-hover:to-blue-500/[0.07] dark:group-hover:from-cyan-500/10 dark:group-hover:to-blue-500/10 rounded-xl transition-all duration-300 -z-10 pointer-events-none" />

              <div className="flex min-h-0 flex-1 flex-col gap-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                      {skill.name}
                    </h3>
                  </div>
                  <Badge
                    variant="outline"
                    className={cn(
                      "shrink-0 text-xs font-semibold px-2.5 py-1 border self-start",
                      levelStyles(skill.level),
                    )}
                  >
                    {skill.level}
                  </Badge>
                </div>

                <div className="mt-auto w-full">
                  <SkillProficiencyBar
                    level={skill.level}
                    sectionVisible={isVisible}
                    delayMs={80 + Math.min(index, 11) * 50}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
