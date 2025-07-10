import { useState, useEffect } from 'react';
import SkillBar from '../components/SkillBar';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Python", level: 80, category: "Language" },
    { name: "AWS", level: 75, category: "Cloud" },
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "Vue.js", level: 80, category: "Frontend" },
    { name: "Express.js", level: 88, category: "Backend" },
    { name: "PostgreSQL", level: 82, category: "Database" },
    { name: "Docker", level: 75, category: "DevOps" },
    { name: "GraphQL", level: 70, category: "API" },
    { name: "Next.js", level: 85, category: "Frontend" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400">
            Technologies and tools I work with regularly
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}