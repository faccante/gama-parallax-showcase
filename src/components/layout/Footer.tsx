
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="glass-nav border-t border-white/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold glass-text">Gama Sibusiso</h3>
            <p className="glass-text-light text-sm">Computer Science Student & Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/hexaredecimal/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-icon hover-scale"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-icon hover-scale"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:gama.sibusiso@university.edu"
              className="glass-icon hover-scale"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="glass-text-light text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="h-4 w-4 text-red-400" /> using React & Tailwind
            </p>
            <p className="glass-text-light text-xs mt-1">
              © {new Date().getFullYear()} Gama Sibusiso. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
