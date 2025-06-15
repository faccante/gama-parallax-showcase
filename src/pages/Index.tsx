
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Navigation } from "@/components/portfolio/Navigation";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollSpeed = scrollY * 0.5;
      
      // Update CSS custom properties for parallax
      document.documentElement.style.setProperty('--scroll-y', scrollY.toString());
      document.documentElement.style.setProperty('--scroll-speed', scrollSpeed.toString());
      
      // Apply parallax to different elements with varying speeds
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
        const yPos = -(scrollY * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Floating animations for glass elements
      const glassElements = document.querySelectorAll('.glass-float');
      glassElements.forEach((element, index) => {
        const offset = Math.sin((scrollY * 0.01) + (index * 0.5)) * 10;
        (element as HTMLElement).style.transform = `translateY(${offset}px) rotateX(${offset * 0.1}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/90 to-slate-900 relative overflow-x-hidden">
      {/* Animated parallax background layers */}
      <div className="fixed inset-0 -z-20">
        {/* Primary gradient layer */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-slate-900/20 to-transparent"
          data-parallax="0.1"
        ></div>
        
        {/* Floating glass orbs with parallax */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-500/10 rounded-full blur-3xl animate-pulse glass-float"
          data-parallax="0.3"
        ></div>
        <div 
          className="absolute top-3/4 right-1/3 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-500/20 rounded-full blur-3xl animate-pulse glass-float"
          data-parallax="0.4"
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-purple-400/15 rounded-full blur-3xl animate-pulse glass-float"
          data-parallax="0.2"
          style={{ animationDelay: '2s' }}
        ></div>
        
        {/* Animated dot pattern with parallax */}
        <div 
          className="absolute inset-0 opacity-30"
          data-parallax="0.6"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
