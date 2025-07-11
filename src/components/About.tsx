
import { Code, Palette, Smartphone, Zap, Award, Users, Coffee, Heart } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building robust web applications with modern technologies like React, Node.js, and TypeScript.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Responsive Design ",
      description: "Developing responsive web applications and mobile-first designs that work seamlessly across devices.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring fast loading times and smooth interactions through code optimization and best practices.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { icon: Award, number: "10+", label: "Projects Completed" },
    { icon: Users, number: "10+", label: "Happy Clients" },
    { icon: Coffee, number: "170+", label: "Cups of Coffee" },
    { icon: Heart, number: "∞", label: "Passion for Code" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate developer with over 1 years of experience creating digital solutions 
            that combine beautiful design with robust functionality. I love turning complex problems 
            into simple, elegant solutions that make people's lives better.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group text-center p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${skill.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <skill.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-12 md:p-16 text-white text-center">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to work on new projects and collaborate with creative minds. 
              Whether you have a specific idea or need help bringing your vision to life, let's connect!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "PostgreSQL", "Next.js", "Tailwind"].map((tech) => (
                <span key={tech} className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
