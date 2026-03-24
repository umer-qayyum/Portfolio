export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-xl text-gradient mb-2">Umer</div>
            <p className="text-sm text-muted-foreground">
              Senior Full Stack Engineer & Technical Leader
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Umer. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
              Crafted with care • Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
