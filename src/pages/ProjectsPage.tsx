
import { Projects } from "@/components/portfolio/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden pt-20">
      {/* Background elements */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/30 via-white/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-slate-50/15 to-white/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <Projects />
    </div>
  );
};

export default ProjectsPage;
