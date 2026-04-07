import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter font-mono inline-block mb-4">
              OJP<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              Building high-converting, fast, and accessible web experiences. Available for freelance opportunities and consulting.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:james031300@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ollan James S. Pulido. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with accessibility and performance in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
