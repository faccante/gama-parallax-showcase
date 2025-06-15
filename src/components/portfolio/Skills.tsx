
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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and programming languages I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-scale transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
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
