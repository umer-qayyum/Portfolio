import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-20 px-4">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            Senior Full Stack Engineer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-pretty leading-tight">
            Building Scalable{' '}
            <span className="text-gradient">SaaS Products</span> That Matter
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I architect and lead high-performing teams to deliver innovative solutions. From vision to deployment, I ensure every product scales beautifully.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-8">
          <a
            href="#"
            className="p-3 rounded-lg bg-card/50 border border-border hover:border-cyan-600/45 hover:bg-cyan-600/10 dark:hover:border-cyan-500/50 dark:hover:bg-cyan-500/10 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg bg-card/50 border border-border hover:border-cyan-600/45 hover:bg-cyan-600/10 dark:hover:border-cyan-500/50 dark:hover:bg-cyan-500/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg bg-card/50 border border-border hover:border-cyan-600/45 hover:bg-cyan-600/10 dark:hover:border-cyan-500/50 dark:hover:bg-cyan-500/10 transition-all"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
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
