import React from 'react';

const ProjectCard = ({ project, index, isVisible }) => (
  <div
    className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    style={{ transitionDelay: `${index * 0.15}s` }}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </button>
        <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
          </svg>
        </button>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a href={project.link} className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block text-center">
          Live Demo
        </a>
        <a href={project.github} className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300 inline-block">
          Code
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;