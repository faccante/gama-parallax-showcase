
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden pt-20">
      {/* Background elements */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/30 via-white/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-white/20 to-slate-100/15 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold glass-text mb-8">Get In Touch</h1>
          <div className="glass-morphism p-8 rounded-2xl mx-4 max-w-3xl mx-auto">
            <p className="text-lg glass-text-light">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="glass-text text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-slate-600" />
                  <div>
                    <p className="glass-text font-medium">Email</p>
                    <p className="glass-text-light">gama.sibusiso@university.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-slate-600" />
                  <div>
                    <p className="glass-text font-medium">Phone</p>
                    <p className="glass-text-light">+27 (0)11 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-slate-600" />
                  <div>
                    <p className="glass-text font-medium">Location</p>
                    <p className="glass-text-light">Johannesburg, South Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="glass-text text-2xl">Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://github.com/hexaredecimal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg glass-button-outline hover-scale transition-all"
                >
                  <Github className="h-6 w-6" />
                  <span className="glass-text">GitHub</span>
                </a>
                
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg glass-button-outline hover-scale transition-all"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="glass-text">LinkedIn</span>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="glass-text text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium glass-text mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="glass-input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium glass-text mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="glass-input"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium glass-text mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="glass-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium glass-text mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={6}
                    className="glass-input"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full glass-button hover-scale">
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
