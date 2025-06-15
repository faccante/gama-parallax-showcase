
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated background elements for parallax */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" 
             style={{ transform: 'translateY(var(--scroll-y, 0) * 0.5px) rotate(var(--scroll-y, 0) * 0.1deg)' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500" 
             style={{ transform: 'translateY(var(--scroll-y, 0) * 0.3px) rotate(var(--scroll-y, 0) * -0.1deg)' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/25 rounded-full blur-2xl animate-pulse delay-1000" 
             style={{ transform: 'translateY(var(--scroll-y, 0) * 0.4px)' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div style={{ transform: 'translateY(var(--scroll-y, 0) * 0.2px)' }}>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=face"
              alt="Gama Sibusiso"
              className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-primary/30 backdrop-blur-sm"
            />
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Gama Sibusiso</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Final Year Computer Science Student & Aspiring Software Developer
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Passionate about creating innovative solutions through code. Currently in my final year pursuing Computer Science 
              with a focus on full-stack development and artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button onClick={scrollToProjects} size="lg" className="hover-scale backdrop-blur-sm bg-primary/90 hover:bg-primary">
                View My Work
              </Button>
              <Button onClick={scrollToContact} variant="outline" size="lg" className="hover-scale backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20">
                Get In Touch
              </Button>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/hexaredecimal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-scale p-3 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-scale p-3 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:gama.sibusiso@university.edu"
                className="text-muted-foreground hover:text-primary transition-colors hover-scale p-3 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
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
