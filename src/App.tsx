/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
