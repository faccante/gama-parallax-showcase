
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Code } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and inventory management.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "AI Study Assistant",
      description: "Machine learning application that helps students organize their study materials and provides personalized learning recommendations.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, built using React and Socket.io for seamless team coordination.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-slate-50/15 to-white/20 rounded-full blur-3xl"
          data-parallax="0.2"
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-white/20 to-slate-100/15 rounded-full blur-3xl"
          data-parallax="0.3"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 glass-morphism p-8 rounded-2xl scroll-animate mx-4" data-parallax="0.1">
          <h2 className="text-3xl md:text-4xl font-bold glass-text mb-6">Featured Projects</h2>
          <p className="text-lg glass-text-light max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my studies and personal time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden glass-card hover-scale transition-all duration-500 scroll-animate"
              data-parallax={`${0.05 + index * 0.02}`}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardHeader className="glass-content pb-4">
                <CardTitle className="glass-text">{project.title}</CardTitle>
                <CardDescription className="glass-text-light">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="glass-content">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="glass-tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="glass-button-outline hover-scale" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="glass-button hover-scale" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Code className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
