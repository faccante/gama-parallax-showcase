
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden pt-20">
      {/* Background elements */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/30 via-white/20 to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-white/30 to-slate-100/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass-morphism p-12 rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold glass-text text-center mb-12">About Me</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=500&fit=crop&crop=face"
                alt="Gama Sibusiso"
                className="w-full rounded-lg object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold glass-text">My Journey</h2>
              <p className="glass-text-light text-lg leading-relaxed">
                I'm a passionate Computer Science student in my final year, with a deep love for creating 
                innovative software solutions. My journey in technology began with curiosity about how 
                things work, and has evolved into a career pursuit focused on full-stack development 
                and artificial intelligence.
              </p>
              
              <h2 className="text-2xl font-semibold glass-text">What Drives Me</h2>
              <p className="glass-text-light text-lg leading-relaxed">
                I believe technology should make life better for everyone. Whether it's building 
                user-friendly web applications or exploring the possibilities of AI, I'm always 
                looking for ways to solve real-world problems through code.
              </p>
              
              <h2 className="text-2xl font-semibold glass-text">Beyond Code</h2>
              <p className="glass-text-light text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or learning about the latest developments in artificial 
                intelligence and machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
