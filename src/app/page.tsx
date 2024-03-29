'use client';

import { AboutUs } from '@/components/Aboutus';
import { Blog } from '@/components/Blog';
import { Contact } from '@/components/Contact';
import { Home } from '@/components/Home';
import { Services } from '@/components/Services';
import { FAQ } from '@/components/FAQ';

export default function App() {
  return (
    <div className="mx-auto max-w-5xl">
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="faq">
        <FAQ />
      </section>
      
    </div>
  );
}
