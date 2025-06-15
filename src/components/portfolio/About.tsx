
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-slate-100/15 to-white/20 rounded-full blur-3xl"
          data-parallax="0.2"
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-white/25 to-slate-50/15 rounded-full blur-3xl"
          data-parallax="0.3"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 glass-morphism p-8 rounded-2xl scroll-animate mx-4" data-parallax="0.1">
          <h2 className="text-3xl md:text-4xl font-bold glass-text mb-6">About Me</h2>
          <p className="text-lg glass-text-light max-w-2xl mx-auto">
            Learn more about my journey in Computer Science and what drives my passion for technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center px-4">
          <div data-parallax="0.05" className="scroll-animate-left">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
              alt="Coding workspace"
              className="rounded-lg shadow-2xl w-full glass-image hover-scale transition-transform duration-500"
            />
          </div>
          
          <div className="space-y-8 glass-morphism p-8 rounded-2xl scroll-animate-right" data-parallax="0.08">
            <h3 className="text-2xl font-semibold glass-text">My Story</h3>
            <p className="glass-text-light leading-relaxed text-base">
              I'm currently a final year student at State University pursuing my Bachelor's degree in Computer Science. 
              My journey into programming began in high school, and I've been fascinated by the power of 
              technology to solve real-world problems ever since.
            </p>
            <p className="glass-text-light leading-relaxed text-base">
              I specialize in full-stack web development and have experience with modern frameworks and 
              technologies. I'm particularly interested in artificial intelligence, machine learning, 
              and creating user-friendly applications that make a difference.
            </p>
            
            <div className="grid gap-6 mt-10">
              <div className="flex items-center space-x-4 glass-info-item scroll-animate p-4">
                <User className="h-6 w-6 text-slate-600 flex-shrink-0" />
                <span className="glass-text">Final Year Computer Science Student</span>
              </div>
              <div className="flex items-center space-x-4 glass-info-item scroll-animate p-4">
                <Code className="h-6 w-6 text-slate-600 flex-shrink-0" />
                <span className="glass-text">Full-Stack Developer</span>
              </div>
              <div className="flex items-center space-x-4 glass-info-item scroll-animate p-4">
                <Briefcase className="h-6 w-6 text-slate-600 flex-shrink-0" />
                <span className="glass-text">Open to Internship Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
