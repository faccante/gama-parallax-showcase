
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
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ transform: 'translateY(var(--scroll-y, 0) * 0.25px)' }}></div>
        <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" 
             style={{ transform: 'translateY(var(--scroll-y, 0) * 0.35px)' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" style={{ transform: 'translateY(var(--scroll-y, 0) * 0.15px)' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and programming languages I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl hover:bg-white/15"
                  style={{ transform: `translateY(var(--scroll-y, 0) * ${0.1 + index * 0.02}px)` }}>
              <CardHeader>
                <CardTitle className="text-lg text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 backdrop-blur-sm bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors"
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
