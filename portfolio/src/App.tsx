import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import React from "react";
function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <Experience />
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <Projects />
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <Skills />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

export default App;