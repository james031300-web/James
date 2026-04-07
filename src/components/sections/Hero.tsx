import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground w-fit">
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.95]">
              Crafting <span className="text-muted-foreground">accessible</span> & high-performance web experiences.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
              Hi, I'm Ollan James S. Pulido. A senior web developer specializing in modern frontend architecture, scalable UI, and WCAG 2.1 AA compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2" onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Hire Me
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-8 text-sm font-mono text-muted-foreground uppercase tracking-wider">
              <div className="flex flex-col gap-1">
                <span className="text-foreground font-bold text-2xl">5+</span>
                <span>Years Exp.</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-foreground font-bold text-2xl">50+</span>
                <span>Projects</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-foreground font-bold text-2xl">100%</span>
                <span>Client Success</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-full bg-muted/30 border border-border/50 relative overflow-hidden flex items-center justify-center">
              {/* Abstract representation or photo could go here */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-muted/20 z-10" />
              <div className="w-3/4 h-3/4 rounded-full border border-dashed border-muted-foreground/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-1/2 h-1/2 rounded-full border border-muted-foreground/20 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute font-mono text-xs text-muted-foreground tracking-widest uppercase">
                &lt;Developer /&gt;
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
