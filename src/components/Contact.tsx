
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mugahedmotaz@gmail.com",
      link: "mailto:mugahedmotaz@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+249 920486301",
      link: "tel:+249920486301",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Khartoum, Sudan",
      link: "#",
      color: "text-purple-600"
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Available for projects",
      link: "#",
      color: "text-orange-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/mugahedmotaz",
      color: "hover:text-gray-900",
      bg: "hover:bg-gray-100"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/mugahedmotaz",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-50"
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Get In Touch</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title} 
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <a
                        href={info.link}
                        className="flex items-center space-x-6 text-white hover:text-blue-200 transition-colors group"
                      >
                        <div className={`p-4 bg-white/20 rounded-xl group-hover:bg-white/30 transition-all duration-300 ${info.color}`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-blue-200 mb-1">{info.title}</p>
                          <p className="font-semibold text-lg">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${social.bg}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon className={`w-6 h-6 text-white transition-colors ${social.color}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-8 text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-blue-400 focus:ring-blue-400"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-blue-400 focus:ring-blue-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-white mb-2 block">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-blue-400 focus:ring-blue-400"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:border-blue-400 focus:ring-blue-400 focus:outline-none resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-20 pt-12 border-t border-white/20 text-center">
          <p className="text-blue-200 text-lg mb-4">
            © 2024 Mugahed Motaz. Built with React, TypeScript, and lots of ☕
          </p>
          <p className="text-white/60">
            Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
