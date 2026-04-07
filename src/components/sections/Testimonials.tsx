import { motion } from 'motion/react';
import { testimonials } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Client Feedback</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take my word for it. Here's what people I've worked with have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-none bg-muted/30 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-muted-foreground/20" />
                <CardContent className="pt-8 pb-6 px-8">
                  <p className="text-lg leading-relaxed mb-6 italic text-muted-foreground">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
