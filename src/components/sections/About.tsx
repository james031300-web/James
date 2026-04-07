import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';

const skills = [
  "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", 
  "Framer Motion", "GraphQL", "REST APIs", "Web Accessibility (WCAG)", 
  "Performance Optimization", "CI/CD", "Jest / Testing Library"
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">
            About Me
          </h2>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              I am a web developer with a passion for building digital experiences that are not only visually striking but also fundamentally sound. My approach centers on the intersection of design, performance, and accessibility.
            </p>
            <p>
              Over the years, I've partnered with startups, agencies, and enterprise clients to deliver scalable frontend architectures. I believe that a great user interface should be inclusive, loading instantly and functioning flawlessly for every user, regardless of their device or abilities.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new web technologies, contributing to open-source, or speaking at local meetups about the importance of web accessibility and performance budgets.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 font-mono uppercase tracking-wider text-foreground">Core Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge variant="secondary" className="text-sm py-1.5 px-4 rounded-full font-medium">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
