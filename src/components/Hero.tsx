
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced greeting with icon */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
            <span className="text-xl text-gray-300 font-light">Hello, I'm</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Mugahed Motaz
            </span>
          </h1>
          
          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafting beautiful digital experiences with cutting-edge technologies
              and innovative design solutions that make a difference.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 text-lg font-semibold"
            >
              Explore My Work
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white/30 hover:border-white/60 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-10 py-4 rounded-full transition-all duration-300 text-lg font-semibold"
            >
              Get In Touch
            </Button>
          </div>

          {/* Enhanced social links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <Github className="w-7 h-7 text-white group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <Linkedin className="w-7 h-7 text-white group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:mugahedmotaz@gmail.com"
              className="group p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <Mail className="w-7 h-7 text-white group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg"
            >
              <Download className="w-7 h-7 text-white" />
            </a>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="group text-white/70 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10 backdrop-blur-sm"
          >
            <ArrowDown className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform" />
            <p className="text-sm mt-2 opacity-60">Scroll to explore</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
