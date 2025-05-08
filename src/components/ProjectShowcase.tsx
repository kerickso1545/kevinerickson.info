import React from 'react';
import ScrollObserver from '../utils/ScrollObserver';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const ProjectShowcase: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Bubinga – AI Document Intelligence Platform",
      description: "Led development of an AI-powered document intelligence platform that automates ingestion, classification, extraction, and routing of healthcare documents. Built to streamline Medicare workflows like Prior Authorization and Medical Review, Bubinga supports scalable processing, exception handling, and modular integrations within a secure, cloud-native environment.",
      tags: ["AI/ML", "Healthcare Tech", "Document Automation", "Cloud Architecture", "RPA"],
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg"
    },
    {
      title: "Modernization Strategy",
      description: "Architected and delivered a strategic modernization roadmap for a large Medicare contractor, achieving a 50% reduction in staffing and over $50 million in annual savings. Replaced paper-heavy processes with enterprise content management, robotic process automation, and integrated workflow systems to enhance compliance, throughput, and service quality.",
      tags: ["Digital Transformation", "Workflow Automation", "Process Optimization", "Enterprise Systems"],
      image: "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg"
    },
    {
      title: "Operational Data Hub Strategy",
      description: "Developed a strategic roadmap for a healthcare payer to unify operational data across disparate systems, including IBM mainframe (DB2, VSAM), SQL Server, and core line-of-business applications. The initiative aimed to enable real-time reporting, cross-system integration, and analytics readiness. Designed the architecture, requirements, and implementation approach to accelerate future integration efforts by 4–5x.",
      tags: ["Data Strategy", "Healthcare IT", "System Modernization", "Enterprise Architecture"],
      image: "https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <ScrollObserver key={index} threshold={0.2} rootMargin="0px 0px -100px 0px">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className="w-full md:w-1/2">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-5">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollObserver>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;