
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Task Manager",
      description: "An intelligent task management system that uses machine learning to prioritize tasks and predict completion times.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with real-time data visualization and location-based forecasting.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media performance tracking with automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "MongoDB", "Express"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden pt-20">
      {/* Background elements */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/30 via-white/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-slate-50/15 to-white/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold glass-text mb-8">My Projects</h1>
          <div className="glass-morphism p-8 rounded-2xl mx-4 max-w-3xl mx-auto">
            <p className="text-lg glass-text-light">
              Here are some of the projects I've worked on. Each one represents a unique challenge 
              and an opportunity to learn new technologies and solve interesting problems.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover-scale transition-all duration-500">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="glass-text text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="glass-text-light">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="glass-skill-tag text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-button-outline"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 glass-button"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
