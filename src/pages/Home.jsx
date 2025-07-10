import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Omkar Gaikwad
            </span>
          </h1>
          <p className="text-xl sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate full-stack developer creating innovative digital experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        
        {/* Floating Links Section */}
        <div className={`mt-8 animate-float transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className='text-2xl sm:text-3xl font-bold text-gray-200'>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Links To My Profiles
            </span>
          </h3>
          <div className="flex space-x-4 justify-center mt-5">
            <a href="https://github.com/dev-dexterity" target="_blank" rel="noopener noreferrer"
              className={`w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-400 hover:text-white hover:bg-gray-700 animate-float-delay-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.7s' }}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/omkar-gaikwad-20902b265/" target="_blank" rel="noopener noreferrer"
              className={`w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-blue-400 hover:text-blue-300 hover:bg-blue-900/30 animate-float-delay-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.9s' }}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a href="https://leetcode.com/u/tzTshezLAq/" target="_blank" rel="noopener noreferrer"
              className={`w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-orange-400 hover:text-orange-300 hover:bg-orange-900/30 animate-float-delay-3 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.1s' }}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.368-.278l3.501 2.631c.593.445 1.431.334 1.878-.25.445-.584.334-1.421-.251-1.877L14.929 5.79a5.957 5.957 0 0 0-1.446-.83zm-.921 8.066c.117.026.267.026.384 0a1.378 1.378 0 0 0 .961-.438l.477-.477a1.378 1.378 0 0 0 0-1.951 1.378 1.378 0 0 0-1.951 0l-.477.477a1.378 1.378 0 0 0 0 1.951c.128.128.296.216.477.233a1.378 1.378 0 0 0 .477-.233z" />
              </svg>
            </a>

            <a href="https://www.naukri.com/code360/profile/1464443a-b35c-4d74-b660-007b267a0a2a" target="_blank" rel="noopener noreferrer"
              className={`w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-green-400 hover:text-green-300 hover:bg-green-900/30 animate-float-delay-4 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.3s' }}>
              <img src="https://files.codingninjas.in/logo.png" alt="Coding Ninjas" width="120" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Add floating animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delay-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes float-delay-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        @keyframes float-delay-4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay-1 {
          animation: float-delay-1 2.5s ease-in-out infinite;
          animation-delay: 0.2s;
        }
        
        .animate-float-delay-2 {
          animation: float-delay-2 3.2s ease-in-out infinite;
          animation-delay: 0.4s;
        }
        
        .animate-float-delay-3 {
          animation: float-delay-3 2.8s ease-in-out infinite;
          animation-delay: 0.6s;
        }
        
        .animate-float-delay-4 {
          animation: float-delay-4 3.5s ease-in-out infinite;
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
} 