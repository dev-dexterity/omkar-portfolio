import React from 'react';

const SkillBar = ({ skill, index, isVisible }) => (
  <div
    className={`mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    <div className="flex justify-between items-center mb-2">
      <div>
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-xs text-gray-500 ml-2">{skill.category}</span>
      </div>
      <span className="text-blue-400 font-semibold">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out relative"
        style={{
          width: isVisible ? `${skill.level}%` : '0%',
          transitionDelay: `${index * 0.1 + 0.3}s`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      </div>
    </div>
  </div>
);

export default SkillBar;