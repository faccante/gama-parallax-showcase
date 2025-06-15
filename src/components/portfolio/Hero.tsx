
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=face"
            alt="Alex Johnson"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Hi, I'm <span className="text-primary">Alex Johnson</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Computer Science Student & Aspiring Software Developer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Passionate about creating innovative solutions through code. Currently pursuing my degree in Computer Science 
            with a focus on full-stack development and artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button onClick={scrollToProjects} size="lg" className="hover-scale">
              View My Work
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg" className="hover-scale">
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
