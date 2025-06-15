
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Parallax background layers */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-white/30 to-slate-200/20 rounded-full blur-3xl animate-pulse" 
          data-parallax="0.3"
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-slate-100/20 to-white/30 rounded-full blur-3xl animate-pulse" 
          data-parallax="0.2"
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-slate-200/20 to-white/40 rounded-full blur-2xl animate-pulse" 
          data-parallax="0.4"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 glass-morphism p-8 rounded-2xl scroll-animate" data-parallax="0.1">
          <h2 className="text-3xl md:text-4xl font-bold glass-text mb-4">Get In Touch</h2>
          <p className="text-lg glass-text-light max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="glass-card max-w-lg w-full scroll-animate-scale" data-parallax="0.05">
            <CardHeader>
              <CardTitle className="text-center text-2xl glass-text">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="glass-content">
              <p className="text-center glass-text-light mb-8">
                Whether you're looking for a talented developer, have a project idea, or just want to connect, 
                I'd love to hear from you. Reach out through any of the channels below.
              </p>
              
              <div className="space-y-6">
                <div className="glass-contact-item hover-scale scroll-animate">
                  <Mail className="h-6 w-6 text-slate-600" />
                  <a href="mailto:gama.sibusiso@university.edu" className="glass-text hover:text-slate-900 transition-colors text-lg">
                    gama.sibusiso@university.edu
                  </a>
                </div>
                
                <div className="glass-contact-item hover-scale scroll-animate">
                  <Github className="h-6 w-6 text-slate-600" />
                  <a href="https://github.com/hexaredecimal/" target="_blank" rel="noopener noreferrer" className="glass-text hover:text-slate-900 transition-colors text-lg">
                    GitHub Profile
                  </a>
                </div>
                
                <div className="glass-contact-item hover-scale scroll-animate">
                  <Linkedin className="h-6 w-6 text-slate-600" />
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass-text hover:text-slate-900 transition-colors text-lg">
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
