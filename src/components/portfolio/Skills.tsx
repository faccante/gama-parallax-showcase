
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
    },
    {
      title: "Frontend Development",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Django", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Linux", "VS Code", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-br from-white/30 to-slate-200/20 rounded-full blur-3xl animate-pulse" 
          data-parallax="0.25"
        ></div>
        <div 
          className="absolute bottom-0 left-1/3 w-60 h-60 bg-gradient-to-br from-slate-100/30 to-white/20 rounded-full blur-3xl animate-pulse" 
          data-parallax="0.35"
          style={{ animationDelay: '0.7s' }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/2 w-40 h-40 bg-gradient-to-br from-slate-200/20 to-white/30 rounded-full blur-2xl animate-pulse" 
          data-parallax="0.15"
          style={{ animationDelay: '1.2s' }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 glass-morphism p-8 rounded-2xl scroll-animate" data-parallax="0.15">
          <h2 className="text-3xl md:text-4xl font-bold glass-text mb-4">Skills & Technologies</h2>
          <p className="text-lg glass-text-light max-w-2xl mx-auto">
            Here are the technologies and programming languages I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card hover-scale transition-all duration-500 scroll-animate"
              data-parallax={`${0.1 + index * 0.02}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg text-center glass-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="glass-skill-tag hover-scale"
                      style={{ animationDelay: `${(index * 6 + skillIndex) * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
