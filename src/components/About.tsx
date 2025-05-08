import React from 'react';
import { Stethoscope, LineChart, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <img 
                src="/kevin-headshot.jpg" 
                alt="Kevin Erickson" 
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  I'm a healthcare technology strategist and innovation architect with deep experience in public sector programs, 
                  including Medicare and Medicaid. At BRYJ and Eightfold Consulting, I lead initiatives that align healthcare 
                  operations with innovative technology solutions, helping organizations modernize systems, improve efficiency, 
                  and adapt to regulatory change.
                </p>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              My background includes strategic consulting, business development, and full lifecycle support for complex RFPs. 
              I bring a strong foundation in full-stack development and have recently been building AI-driven tools—most notably 
              Bubinga, a document intelligence platform that leverages modern AI technologies to automate and streamline 
              healthcare workflows.
            </p>
            
            <p className="mb-8">
              With a practical understanding of healthcare systems, data workflows, and the realities of government contracting, 
              I specialize in bridging strategic vision with hands-on implementation—turning ideas into working solutions that 
              deliver measurable impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Stethoscope size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare Strategy</h3>
              <p className="text-gray-600">
                Expertise in Medicare, Medicaid, and public sector healthcare programs.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <LineChart size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Consulting</h3>
              <p className="text-gray-600">
                Leading healthcare initiatives and RFP development for complex projects.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Architecture</h3>
              <p className="text-gray-600">
                Designing and implementing healthcare technology solutions including Bubinga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;