
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-slate-200/20 to-white/30 rounded-full blur-3xl animate-pulse"
          data-parallax="0.2"
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-white/40 to-slate-100/20 rounded-full blur-3xl animate-pulse"
          data-parallax="0.3"
          style={{ animationDelay: '0.8s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 glass-morphism p-8 rounded-2xl scroll-animate" data-parallax="0.1">
          <h2 className="text-3xl md:text-4xl font-bold glass-text mb-4">About Me</h2>
          <p className="text-lg glass-text-light max-w-2xl mx-auto">
            Learn more about my journey in Computer Science and what drives my passion for technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-parallax="0.05" className="scroll-animate-left">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
              alt="Coding workspace"
              className="rounded-lg shadow-2xl w-full glass-image hover-scale transition-transform duration-500"
            />
          </div>
          
          <div className="space-y-6 glass-morphism p-8 rounded-2xl scroll-animate-right" data-parallax="0.08">
            <h3 className="text-2xl font-semibold glass-text">My Story</h3>
            <p className="glass-text-light leading-relaxed">
              I'm currently a final year student at State University pursuing my Bachelor's degree in Computer Science. 
              My journey into programming began in high school, and I've been fascinated by the power of 
              technology to solve real-world problems ever since.
            </p>
            <p className="glass-text-light leading-relaxed">
              I specialize in full-stack web development and have experience with modern frameworks and 
              technologies. I'm particularly interested in artificial intelligence, machine learning, 
              and creating user-friendly applications that make a difference.
            </p>
            
            <div className="grid gap-4 mt-8">
              <div className="flex items-center space-x-3 glass-info-item scroll-animate">
                <User className="h-5 w-5 text-slate-600" />
                <span className="glass-text">Final Year Computer Science Student</span>
              </div>
              <div className="flex items-center space-x-3 glass-info-item scroll-animate">
                <Code className="h-5 w-5 text-slate-600" />
                <span className="glass-text">Full-Stack Developer</span>
              </div>
              <div className="flex items-center space-x-3 glass-info-item scroll-animate">
                <Briefcase className="h-5 w-5 text-slate-600" />
                <span className="glass-text">Open to Internship Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
