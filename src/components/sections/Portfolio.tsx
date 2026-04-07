import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '@/data/portfolio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function Portfolio() {
  const [filter, setFilter] = useState<string | null>(null);

  // Extract unique tech stack items for filters
  const allTech = Array.from(new Set(projects.flatMap(p => p.tech_stack)));
  const topTech = allTech.slice(0, 5); // Just show top 5 for simplicity

  const filteredProjects = filter 
    ? projects.filter(p => p.tech_stack.includes(filter))
    : projects;

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Selected Work</h2>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              A showcase of recent projects focusing on performance, accessibility, and scalable architecture.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            <Button 
              variant={filter === null ? "default" : "outline"} 
              size="sm" 
              onClick={() => setFilter(null)}
              className="rounded-full"
            >
              All
            </Button>
            {topTech.map(tech => (
              <Button 
                key={tech}
                variant={filter === tech ? "default" : "outline"} 
                size="sm" 
                onClick={() => setFilter(tech)}
                className="rounded-full"
              >
                {tech}
              </Button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group border-border/50 bg-card hover:border-border transition-colors">
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <img 
                      src={project.images[0]} 
                      alt={`Screenshot of ${project.title}`} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.links.live && (
                        <Button size="sm" variant="secondary" className="gap-2" asChild>
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" /> Live Site
                          </a>
                        </Button>
                      )}
                      {project.links.repo && (
                        <Button size="sm" variant="secondary" className="gap-2" asChild>
                          <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" /> Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{project.role}</span>
                      <span className="text-xs text-muted-foreground">{new Date(project.date).getFullYear()}</span>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm mt-2 line-clamp-2">{project.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-lg font-bold text-foreground">{value}</span>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">{key}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex flex-wrap gap-2">
                    {project.tech_stack.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="secondary" className="text-xs font-normal">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech_stack.length > 3 && (
                      <Badge variant="outline" className="text-xs font-normal">
                        +{project.tech_stack.length - 3}
                      </Badge>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
