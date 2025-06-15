
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden pt-20">
      {/* Background elements */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/30 via-white/20 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-white/30 to-slate-100/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold glass-text mb-8">Get In Touch</h1>
          <div className="glass-morphism p-8 rounded-2xl mx-4 max-w-2xl mx-auto">
            <p className="text-lg glass-text-light">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="glass-text text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 glass-text" />
                <div>
                  <p className="glass-text font-medium">Email</p>
                  <p className="glass-text-light">gama.sibusiso@university.edu</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 glass-text" />
                <div>
                  <p className="glass-text font-medium">Phone</p>
                  <p className="glass-text-light">+27 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 glass-text" />
                <div>
                  <p className="glass-text font-medium">Location</p>
                  <p className="glass-text-light">South Africa</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/20">
                <p className="glass-text font-medium mb-4">Follow Me</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/hexaredecimal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-icon hover-scale"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-icon hover-scale"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="glass-text text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block glass-text font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg glass-morphism border border-white/20 glass-text placeholder-slate-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block glass-text font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg glass-morphism border border-white/20 glass-text placeholder-slate-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block glass-text font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg glass-morphism border border-white/20 glass-text placeholder-slate-400 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <Button className="w-full glass-button hover-scale">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
