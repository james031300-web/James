import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully!", {
      description: "I'll get back to you within 24-48 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Let's build something great together.</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-[500px]">
              Whether you need a new web application, an accessibility audit, or a performance overhaul, I'm here to help. Fill out the form, and let's discuss your project.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Email</h3>
                <a href="mailto:james031300@gmail.com" className="text-xl font-medium hover:text-primary transition-colors">
                  james031300@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Location</h3>
                <p className="text-xl font-medium">Remote / Global</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below to get in touch.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Estimated Budget</Label>
                      <Input id="budget" placeholder="$5k - $10k" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Input id="timeline" placeholder="1-2 months" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="Tell me about your project goals, technical requirements, and any specific challenges..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"} 
                    {!isSubmitting && <Send className="h-4 w-4" />}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
