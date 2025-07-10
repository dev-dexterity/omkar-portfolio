import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack React application with Node.js backend, featuring real-time inventory management, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "AI-Powered Dashboard",
      description: "Interactive dashboard for machine learning model monitoring with real-time data visualization and predictive analytics.",
      tech: ["Python", "FastAPI", "React", "D3.js", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure React Native application with biometric authentication, real-time transactions, and comprehensive financial tracking.",
      tech: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting.",
      tech: ["Vue.js", "Express", "MySQL", "Redis", "WebSocket"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Advanced analytics platform for social media metrics with AI-powered insights and automated reporting.",
      tech: ["Angular", "Django", "PostgreSQL", "Docker", "AWS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "IoT Monitoring Dashboard",
      description: "Real-time monitoring system for IoT devices with data visualization, alerts, and predictive maintenance.",
      tech: ["Next.js", "Node.js", "InfluxDB", "MQTT", "Chart.js"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects and Freelance Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}