'use client';

import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    _hp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        toast.error(data.error ?? 'Something went wrong. Please try again.');
        return;
      }

      toast.success('Message sent. I will get back to you soon.');
      setFormState({ name: '', email: '', message: '', _hp: '' });
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:mohammedumer3353@gmail.com',
      display: 'mohammedumer3353@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-umer-1921a6281/',
      display: 'muhammad-umer-1921a6281',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/umer-qayyum',
      display: 'umer-qayyum',
    },
    // {
    //   icon: Twitter,
    //   label: 'Twitter',
    //   href: 'https://twitter.com',
    //   display: '@alexengineer',
    // },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-cyan-700 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Let's Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-gradient">Build Something Great?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you're looking to scale your product, need technical leadership, or want to discuss ideas - I'm here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`bg-card-gradient border border-border rounded-xl p-8 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isVisible ? '200ms' : '0ms',
            }}
          >
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="relative space-y-4">
              <div className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden>
                <label htmlFor="contact-hp">Company</label>
                <input
                  id="contact-hp"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formState._hp}
                  onChange={(e) =>
                    setFormState({ ...formState, _hp: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="bg-background border-border"
                  required
                  disabled={isSubmitting}
                  autoComplete="name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="bg-background border-border"
                  required
                  disabled={isSubmitting}
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project or idea..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-600 dark:focus:ring-cyan-500 focus:border-transparent resize-none disabled:opacity-60"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  autoComplete="off"
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-black font-semibold disabled:opacity-60"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Quick Links */}
          <div
            className={`flex flex-col justify-center space-y-8 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isVisible ? '400ms' : '0ms',
            }}
          >
            <div>
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-card/50 border border-border hover:border-cyan-600/45 hover:bg-cyan-600/10 dark:hover:border-cyan-500/50 dark:hover:bg-cyan-500/10 rounded-lg transition-all group"
                    >
                      <Icon className="w-5 h-5 text-cyan-700 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">
                          {link.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {link.display}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-cyan-600/10 border border-cyan-600/25 dark:bg-cyan-500/10 dark:border-cyan-500/30 rounded-lg p-4">
              <p className="text-sm font-semibold text-cyan-800 dark:text-cyan-400 mb-1">
                Currently Available
              </p>
              <p className="text-sm text-muted-foreground">
                Open to full-time roles, consulting, and advisory positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
