
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Parallax background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" 
             style={{ transform: 'translateY(var(--scroll-y, 0) * 0.3px)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" 
             style={{ transform: 'translateY(var(--scroll-y, 0) * 0.2px)' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" style={{ transform: 'translateY(var(--scroll-y, 0) * 0.1px)' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl max-w-lg w-full">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-8">
                Whether you're looking for a talented developer, have a project idea, or just want to connect, 
                I'd love to hear from you. Reach out through any of the channels below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-scale">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:gama.sibusiso@university.edu" className="text-foreground hover:text-primary transition-colors text-lg">
                    gama.sibusiso@university.edu
                  </a>
                </div>
                
                <div className="flex items-center justify-center space-x-4 p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-scale">
                  <Github className="h-6 w-6 text-primary" />
                  <a href="https://github.com/hexaredecimal/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors text-lg">
                    GitHub Profile
                  </a>
                </div>
                
                <div className="flex items-center justify-center space-x-4 p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-scale">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors text-lg">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
