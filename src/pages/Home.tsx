
import { Hero } from "@/components/portfolio/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden">
      {/* Animated parallax background layers */}
      <div className="fixed inset-0 -z-20">
        {/* Primary gradient layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/30 via-white/20 to-transparent"></div>
        
        {/* Floating glass orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/40 to-slate-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div 
          className="absolute top-3/4 right-1/3 w-80 h-80 bg-gradient-to-br from-slate-100/30 to-white/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/2 w-64 h-64 bg-gradient-to-br from-slate-200/20 to-white/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        
        {/* Animated dot pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23475569' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <Hero />
    </div>
  );
};

export default Home;
