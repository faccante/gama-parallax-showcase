
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-white/50 to-slate-200/30 rounded-full blur-3xl animate-pulse"
          data-parallax="0.3"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-slate-100/40 to-white/50 rounded-full blur-3xl animate-pulse"
          data-parallax="0.2"
          style={{
            animationDelay: '0.5s',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-slate-200/40 to-white/40 rounded-full blur-2xl animate-pulse"
          data-parallax="0.4"
          style={{
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
      </div>
      
      {/* Floating glass particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full animate-pulse"
            data-parallax={`${0.1 + i * 0.05}`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translate(${mousePosition.x * (0.005 + i * 0.002)}px, ${mousePosition.y * (0.005 + i * 0.002)}px)`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="scroll-animate glass-morphism" data-parallax="0.1">
          <div className="p-12">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=face"
              alt="Gama Sibusiso"
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-white/50 backdrop-blur-sm glass-hover scroll-animate-scale"
              data-parallax="0.05"
            />
            
            <h1 className="text-4xl md:text-6xl font-bold glass-text mb-4 scroll-animate-left">
              Hi, I'm <span className="text-transparent bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600 bg-clip-text">Gama Sibusiso</span>
            </h1>
            
            <p className="text-xl md:text-2xl glass-text-light mb-6 scroll-animate-right">
              Final Year Computer Science Student & Aspiring Software Developer
            </p>
            
            <p className="text-lg glass-text-light max-w-2xl mx-auto mb-8 scroll-animate">
              Passionate about creating innovative solutions through code. Currently in my final year pursuing Computer Science 
              with a focus on full-stack development and artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 scroll-animate">
              <Button 
                onClick={scrollToProjects} 
                size="lg" 
                className="glass-button hover-scale"
                data-parallax="0.02"
              >
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact} 
                variant="outline" 
                size="lg" 
                className="glass-button-outline hover-scale"
                data-parallax="0.02"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex justify-center space-x-6 scroll-animate-scale">
              <a
                href="https://github.com/hexaredecimal/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-icon hover-scale"
                data-parallax="0.01"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-icon hover-scale"
                data-parallax="0.01"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:gama.sibusiso@university.edu"
                className="glass-icon hover-scale"
                data-parallax="0.01"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
