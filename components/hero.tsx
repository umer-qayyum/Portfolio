/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useMemo, useState } from 'react';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mql.matches);
    onChange();
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, []);

  return reduced;
}

function TypingLine({
  text,
  startDelayMs = 250,
  charDelayMs = 28,
}: {
  text: string;
  startDelayMs?: number;
  charDelayMs?: number;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visibleChars, setVisibleChars] = useState(prefersReducedMotion ? text.length : 0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    setVisibleChars(0);
    let timeoutId: number | undefined;
    let intervalId: number | undefined;

    timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setVisibleChars((n) => (n >= text.length ? n : n + 1));
      }, charDelayMs);
    }, startDelayMs);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [prefersReducedMotion, text, startDelayMs, charDelayMs]);

  const shown = text.slice(0, visibleChars);
  const done = visibleChars >= text.length;

  return (
    <span className="relative" aria-label={text}>
      <span aria-hidden>{shown}</span>
      <span className="sr-only">{text}</span>
      {!prefersReducedMotion && (
        <span
          aria-hidden
          className={[
            'inline-block align-[-0.18em] ml-[1px] h-[1.05em] w-[1.5px] rounded-full bg-cyan-700/80 dark:bg-cyan-400/80',
            done ? 'opacity-0' : 'opacity-100 animate-pulse',
          ].join(' ')}
        />
      )}
    </span>
  );
}

export default function Hero() {
  const role = useMemo(() => 'Senior Full Stack Engineer', []);

  const intro = useMemo(
    () =>
      "Hi, I'm Umer — who helps teams ship reliable, scalable products.",
    []
  );

  /** Start intro after eyebrow has mostly finished typing (~role length × char delay + buffer). */
  const introStartDelayMs = 850;

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-20 px-4">
      {/* Background extends behind fixed navbar (h-16) — no solid “bar” seam */}
      {/* Full-bleed hero background image — softer in light, slightly stronger in dark */}
      <div
        className="pointer-events-none absolute left-0 right-0 bottom-0 -top-16 -z-40 overflow-hidden"
        aria-hidden
      >
        <Image
          src="/hero-section.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-[0.14] dark:opacity-[0.26] scale-[1.02]"
          sizes="100vw"
        />
        {/* Scrim so foreground text stays readable in both themes */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/92 via-background/78 to-background/88 dark:from-background/88 dark:via-background/65 dark:to-background/85" />
      </div>

      {/* Background gradient orbs */}
      <div className="absolute left-0 right-0 bottom-0 -top-16 -z-20 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full ">
        <div className="max-w-3xl mx-auto  ">
          <div className="space-y-8 text-center md:text-center">
            <div className="space-y-4 ">
              <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                <TypingLine text={role} startDelayMs={0} charDelayMs={22} />
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pretty leading-tight">
                Building scalable <span className="text-gradient">SaaS products</span>{' '}
                with speed and craft
              </h1>
              <p className="text-lg md:text-xl w-full text-muted-foreground leading-relaxed">
                {/* <TypingLine
                  text={intro}
                  startDelayMs={introStartDelayMs}
                  charDelayMs={28}
                /> */}
                Hi, I'm Umer — who helps teams ship reliable, scalable products.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I lead architecture, execution, and delivery—turning ambiguous problems
                into clean systems, high-quality UI, and measurable business outcomes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center pt-2">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-black font-semibold group"
                asChild
              >
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-600/35 hover:border-cyan-600/60 hover:bg-cyan-600/10 dark:border-cyan-500/30 dark:hover:border-cyan-500/60 dark:hover:bg-cyan-500/10"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex justify-center md:justify-center gap-4 pt-2">
              <a
                href="https://github.com/umer-qayyum"
                target='_blank'
                className="p-3 rounded-lg bg-card/50 border border-border hover:border-cyan-600/45 hover:bg-cyan-600/10 dark:hover:border-cyan-500/50 dark:hover:bg-cyan-500/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-umer-1921a6281/"
                target='_blank'
                className="p-3 rounded-lg bg-card/50 border border-border hover:border-cyan-600/45 hover:bg-cyan-600/10 dark:hover:border-cyan-500/50 dark:hover:bg-cyan-500/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:mohammedumer3353@gmmail.com"
                className="p-3 rounded-lg bg-card/50 border border-border hover:border-cyan-600/45 hover:bg-cyan-600/10 dark:hover:border-cyan-500/50 dark:hover:bg-cyan-500/10 transition-all"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12">
          <div className="flex justify-center animate-bounce">
            <svg
              className="w-6 h-6 text-cyan-700 dark:text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
