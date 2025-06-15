
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey in Computer Science and what drives my passion for technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
              alt="Coding workspace"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently a junior at State University pursuing my Bachelor's degree in Computer Science. 
              My journey into programming began in high school, and I've been fascinated by the power of 
              technology to solve real-world problems ever since.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in full-stack web development and have experience with modern frameworks and 
              technologies. I'm particularly interested in artificial intelligence, machine learning, 
              and creating user-friendly applications that make a difference.
            </p>
            
            <div className="grid gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-primary" />
                <span className="text-foreground">3rd Year Computer Science Student</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="h-5 w-5 text-primary" />
                <span className="text-foreground">Full-Stack Developer</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="text-foreground">Open to Internship Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
