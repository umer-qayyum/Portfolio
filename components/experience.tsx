'use client';

import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  Building2,
  CalendarDays,
  Compass,
  Layers,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Preesoft',
    period: '2025 - Present',
    description:
      'Leading end-to-end development of scalable SaaS, AI-driven, and full-stack web & mobile solutions as a Senior Software Engineer & Team Lead, driving architecture, performance, and team execution.',
    highlights: [
      'Scalable system architecture',
      'High-performance full-stack execution',
      'Strong team leadership & delivery',
    ],
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'Desflex',
    period: '2024 - 2025',
    description:
      'Led development of web and mobile solutions as a Senior Full Stack Engineer, delivering high-quality products, driving business growth, and managing client collaborations effectively.',
    highlights: [
      'Client-focused solution delivery',
      'Cross-platform development expertise',
      'Consistent high-impact performance',
    ],
  },
  {
    title: 'Tech Lead & Full Stack Engineer',
    company: 'Dzine Media',
    period: '2023 - 2024',
    description:
      'Led development of web and mobile solutions as a Tech Lead & Full Stack Engineer, delivering high-quality products, driving business growth, and managing client collaborations effectively.',
    highlights: [
      'Team leadership & technical guidance',
      'Scalable system architecture',
      'High-performance full-stack execution',
    ],
  },
  {
    title: 'Full Stack Engineer',
    company: 'Technoklouds',
    period: '2022 - 2023',
    description:
      'Developed full-stack features for client projects, learning agile practices and production systems at scale as a Full Stack Engineer, delivering high-quality products, driving business growth, and managing client collaborations effectively.',
    highlights: [
      'Strong problem-solving mindset',
      'Efficient full-stack development',
      'Quick adaptability to new technologies',
    ],
  },
];

type Exp = (typeof experience)[number];

const whatIDo: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Build Scalable Systems',
    description:
      'Design and architect systems that handle millions of requests, ensuring reliability and performance at every scale.',
    icon: Layers,
  },
  {
    title: 'Lead Engineering Teams',
    description:
      'Foster high-performing teams through mentorship, clear communication, and a focus on both technical excellence and team growth.',
    icon: UsersRound,
  },
  {
    title: 'AI-First Products',
    description:
      'Integrate cutting-edge AI models into products, creating intelligent features that solve real problems and delight users.',
    icon: Sparkles,
  },
  {
    title: 'Product Strategy',
    description:
      'Translate business goals into technical roadmaps, balancing innovation with pragmatism to deliver impact.',
    icon: Compass,
  },
];

const timelineIconWrap = cn(
  'flex size-9 shrink-0 items-center justify-center rounded-lg border',
  'border-cyan-600/25 bg-cyan-600/10 text-cyan-700',
  'dark:border-cyan-500/35 dark:bg-cyan-500/10 dark:text-cyan-400'
);

const timelineIconWrapMuted = cn(
  ' mx-2.5 ',
  // 'border-border bg-muted/50 text-muted-foreground',
  // 'dark:bg-muted/30 dark:text-muted-foreground'
);

function ExperienceContent({ exp }: { exp: Exp }) {
  return (
    <div className="pb-2 md:pb-0">
      <div className="mb-4 space-y-2.5">
        <div className="flex items-start gap-3">
          <div className={timelineIconWrap} aria-hidden>
            <Briefcase className="size-4" strokeWidth={1.75} />
          </div>
          <h4 className="min-w-0 flex-1 text-lg font-bold text-foreground leading-snug pt-1">
            {exp.title}
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <div className={timelineIconWrapMuted} aria-hidden>
            <Building2 className="size-4" strokeWidth={1.75} />
          </div>
          <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">{exp.company}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className={timelineIconWrapMuted} aria-hidden>
            <CalendarDays className="size-4" strokeWidth={1.75} />
          </div>
          <p className="text-xs text-muted-foreground">{exp.period}</p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
      <ul className="space-y-1">
        {exp.highlights.map((highlight, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start">
            <span className="text-cyan-700 dark:text-cyan-400 mr-2">•</span>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const itemDelay = (index: number) =>
    isVisible ? `${(whatIDo.length + 1 + index) * 100}ms` : '0ms';

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div
          className={cn(
            'space-y-4 mb-12 md:mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & <span className="text-gradient">Authority</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A snapshot of how I operate as a technical leader—then the roles and
            teams where that showed up in practice.
          </p>
        </div>

        {/* Focus areas — matches Skills / Projects card language */}
        {/* <div
          className={cn(
            'space-y-4 mb-12 md:mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: isVisible ? '75ms' : '0ms' }}
        >
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            Focus areas
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            How I <span className="text-gradient">deliver value</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
            Four pillars that shape my work with products, teams, and stakeholders.
          </p>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-20 md:mb-24">
          {whatIDo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={cn(
                  'transition-all duration-700 motion-reduce:transition-none',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div
                  className={cn(
                    'group relative h-full overflow-hidden rounded-xl border border-border',
                    'bg-card-gradient p-6 hover-lift transition-all duration-300'
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 transition-all duration-300 group-hover:from-cyan-500/[0.08] group-hover:to-blue-500/[0.08] dark:group-hover:from-cyan-500/10 dark:group-hover:to-blue-500/10 rounded-xl -z-10" />

                  <div className="flex flex-col gap-4">
                    <div
                      className={cn(
                        'flex size-11 shrink-0 items-center justify-center rounded-lg border',
                        'border-cyan-600/25 bg-cyan-600/10 text-cyan-700',
                        'dark:border-cyan-500/35 dark:bg-cyan-500/10 dark:text-cyan-400',
                        'transition-colors duration-300 group-hover:border-cyan-600/45 dark:group-hover:border-cyan-500/50'
                      )}
                      aria-hidden
                    >
                      <Icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground leading-snug transition-colors duration-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-400">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-0">
          <div
            className={cn(
              'space-y-3 mb-8 md:mb-10 transition-all duration-700 motion-reduce:transition-none',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
            style={{
              transitionDelay: isVisible ? `${whatIDo.length * 100}ms` : '0ms',
            }}
          >
            <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Journey
            </p>
            <h3 className="text-2xl md:text-3xl font-bold">
              Career <span className="text-gradient">Timeline</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
              Roles and impact across product companies and client engagements.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            {/* Center axis — desktop only */}
            <div
              className="pointer-events-none absolute left-1/2 top-2 bottom-2 hidden w-0.5 -translate-x-1/2 md:block rounded-full bg-gradient-to-b from-cyan-600/15 via-cyan-600/45 to-cyan-600/15 dark:from-cyan-400/10 dark:via-cyan-400/40 dark:to-cyan-400/10"
              aria-hidden
            />

            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === experience.length - 1;

              return (
                <div key={index} className="relative">
                  {/* Mobile / small: line left, content right (unchanged pattern) */}
                  <div
                    className={cn(
                      'flex gap-6 items-stretch pb-10 transition-all duration-700 ease-out motion-reduce:transition-none md:hidden',
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    )}
                    style={{ transitionDelay: itemDelay(index) }}
                  >
                    <div className="flex w-8 shrink-0 flex-col items-center">
                      <div className="mt-1 size-3 shrink-0 rounded-full bg-cyan-600 ring-4 ring-background dark:bg-cyan-400 z-10" />
                      {!isLast && (
                        <div className="mt-3 w-0.5 flex-1 min-h-[4.5rem] rounded-full bg-cyan-600/35 dark:bg-cyan-400/30" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <ExperienceContent exp={exp} />
                    </div>
                  </div>

                  {/* Desktop: alternating left / right of center line */}
                  <div
                    className={cn(
                      'hidden md:grid md:grid-cols-[1fr_1.25rem_1fr] md:items-start md:gap-x-0 md:pb-16 last:md:pb-6',
                      'transition-all duration-700 ease-out motion-reduce:transition-none',
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                    )}
                    style={{ transitionDelay: itemDelay(index) }}
                  >
                    {isEven ? (
                      <>
                        <div
                          className={cn(
                            'group/timeline relative mr-5 flex justify-end overflow-hidden rounded-xl border border-border bg-card-gradient p-6 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none hover-lift',
                            isVisible
                              ? 'opacity-100 md:translate-x-0'
                              : 'opacity-0 md:-translate-x-5'
                          )}
                          style={{ transitionDelay: itemDelay(index) }}
                        >
                          <div
                            className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-cyan-500/[0.08] to-blue-500/[0.08] opacity-0 transition-opacity duration-500 ease-out group-hover/timeline:opacity-100 motion-reduce:transition-none dark:from-cyan-500/10 dark:to-blue-500/10"
                            aria-hidden
                          />
                          <div className="relative w-full max-w-xl text-left">
                            <ExperienceContent exp={exp} />
                          </div>
                        </div>
                        <div className="relative flex justify-center pt-1.5">
                          <div
                            className="size-3.5 shrink-0 rounded-full bg-cyan-600 ring-[5px] ring-background dark:bg-cyan-400 z-10 shadow-sm shadow-cyan-500/30"
                            aria-hidden
                          />
                        </div>
                        <div aria-hidden className="pl-8 md:min-h-[1px]" />
                      </>
                    ) : (
                      <>
                        <div aria-hidden className="pr-8 md:min-h-[1px]" />
                        <div className="relative flex justify-center pt-1.5">
                          <div
                            className="size-3.5 shrink-0 rounded-full bg-cyan-600 ring-[5px] ring-background dark:bg-cyan-400 z-10 shadow-sm shadow-cyan-500/30"
                            aria-hidden
                          />
                        </div>
                        <div
                          className={cn(
                            'group/timeline relative ml-5 flex justify-start overflow-hidden rounded-xl border border-border bg-card-gradient p-6 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none hover-lift',
                            isVisible
                              ? 'opacity-100 md:translate-x-0'
                              : 'opacity-0 md:translate-x-5'
                          )}
                          style={{ transitionDelay: itemDelay(index) }}
                        >
                          <div
                            className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-cyan-500/[0.08] to-blue-500/[0.08] opacity-0 transition-opacity duration-500 ease-out group-hover/timeline:opacity-100 motion-reduce:transition-none dark:from-cyan-500/10 dark:to-blue-500/10"
                            aria-hidden
                          />
                          <div className="relative w-full max-w-xl text-left">
                            <ExperienceContent exp={exp} />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
