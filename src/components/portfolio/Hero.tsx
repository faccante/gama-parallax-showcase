
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
          className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-500/30 to-blue-500/20 rounded-full blur-3xl animate-pulse glass-float"
          data-parallax="0.3"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/25 rounded-full blur-3xl animate-pulse glass-float"
          data-parallax="0.2"
          style={{
            animationDelay: '0.5s',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-400/25 to-cyan-400/20 rounded-full blur-2xl animate-pulse glass-float"
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
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse glass-float"
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
        <div className="animate-fade-in glass-morphism glass-float" data-parallax="0.1">
          <div>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=face"
              alt="Gama Sibusiso"
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-white/30 backdrop-blur-sm glass-hover"
              data-parallax="0.05"
            />
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 glass-text">
              Hi, I'm <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text animate-pulse">Gama Sibusiso</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-6 glass-text">
              Final Year Computer Science Student & Aspiring Software Developer
            </p>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 glass-text">
              Passionate about creating innovative solutions through code. Currently in my final year pursuing Computer Science 
              with a focus on full-stack development and artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            
            <div className="flex justify-center space-x-6">
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
