import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import prabha from '../assets/prabha.png';
import dream from '../assets/dream.png';
import ayhem from '../assets/ayhem.png';
import groq from '../assets/groq.png';
import pomo from '../assets/pomo.png'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
  {
    title: "Pomodoro Technique",
    description: "This is a Frontend project designed for my personal work to stay focused you can use it as well for improving your productivity. In the near future I might want to make it scalable to launch it in the market. Integrating more features like tracking progress, Daily focused time using Flask and MySQL.",
    tech: ["React", "TailwindCSS", "Vite"],
    image: pomo,
    link: "https://omkar-pomodoro-timer.netlify.app/",
    github: "https://github.com/dev-dexterity/PomoDoro-Technique.git"
  },
  {
    title: "My First AI",
    description: "This is my First AI Built using Groq ai's API key I am testing various things to enhance my knowledge and survive the Great AI era :). (This site is not live yet)",
    tech: ["React", "TailwindCSS", "Vite", "MySQL", "Flask", "Python"],
    image: groq,
    link: "#",
    github: "https://github.com/dev-dexterity/My-First-AI.git"
  },
  {
    title: "Prabha Exim Networks",
    description: "Frontend React application with React and Vite, featuring responsive design, Static content, and seamless user experience.",
    tech: ["React", "Vite", "WebForms"],
    image: prabha,
    link: "https://prabhaeximnetwork.com/",
    github: "https://github.com/dev-dexterity/exim-website.git"
  },
  {
    title: "Dream Catch Placement",
    description: "Interactive dashboard for machine learning model monitoring with real-time data visualization and predictive analytics.",
    tech: ["React", "Vite", "@emailjs/browser", "Graphics Design"],
    image: dream,
    link: "http://dreamcatchplacement.com/",
    github: "https://github.com/dev-dexterity/dream-catch.git"
  },
  {
    title: "Ayhem Boubaker",
    description: "A complete website for digital services with a modern design and user-friendly interface built with React and Tailwind CSS.(This site is not live yet)",
    tech: ["React", "TailwindCSS", "Vite", "MySQL", "Flask", "Python"],
    image: ayhem,
    link: "#",
    github: "https://github.com/dev-dexterity/Ayhem.git"
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