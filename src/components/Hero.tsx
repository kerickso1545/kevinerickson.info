import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Kevin Erickson
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 animate-fade-in-delay">
            Healthcare Technology Strategist & Innovation Architect
          </h2>
          <p className="text-gray-600 text-lg mb-12 animate-fade-in-delay-2">
            Transforming Healthcare through AI, Automation, and Practical Innovation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-3">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#about" 
              className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-md border border-gray-300 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;