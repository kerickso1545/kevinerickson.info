import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold text-gray-900">Kevin Erickson</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <a href="https://www.linkedin.com/in/kevinerickson/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:kevin@eightfold.consulting" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>Contact</a>
              
              <div className="flex space-x-4 py-2">
                <a href="https://www.linkedin.com/in/kevinerickson/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:kevin@eightfold.consulting" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;