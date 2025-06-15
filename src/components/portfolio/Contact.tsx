
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Parallax background layers */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/15 rounded-full blur-3xl animate-pulse glass-float" 
          data-parallax="0.3"
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/15 rounded-full blur-3xl animate-pulse glass-float" 
          data-parallax="0.2"
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-purple-400/15 to-blue-400/20 rounded-full blur-2xl animate-pulse glass-float" 
          data-parallax="0.4"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 glass-morphism p-8 rounded-2xl glass-float" data-parallax="0.1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glass-text">Get In Touch</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto glass-text">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="glass-card max-w-lg w-full glass-float" data-parallax="0.05">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-white glass-text">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="glass-content">
              <p className="text-center text-white/80 mb-8 glass-text">
                Whether you're looking for a talented developer, have a project idea, or just want to connect, 
                I'd love to hear from you. Reach out through any of the channels below.
              </p>
              
              <div className="space-y-6">
                <div className="glass-contact-item hover-scale">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <a href="mailto:gama.sibusiso@university.edu" className="text-white hover:text-cyan-400 transition-colors text-lg glass-text">
                    gama.sibusiso@university.edu
                  </a>
                </div>
                
                <div className="glass-contact-item hover-scale">
                  <Github className="h-6 w-6 text-cyan-400" />
                  <a href="https://github.com/hexaredecimal/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors text-lg glass-text">
                    GitHub Profile
                  </a>
                </div>
                
                <div className="glass-contact-item hover-scale">
                  <Linkedin className="h-6 w-6 text-cyan-400" />
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors text-lg glass-text">
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
