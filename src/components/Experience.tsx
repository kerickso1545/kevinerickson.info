import React from 'react';
import { Calendar } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
  logo?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  period, 
  description,
  current = false,
  logo
}) => {
  return (
    <div className={`mb-12 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 
                    before:w-0.5 ${current ? 'before:bg-blue-600' : 'before:bg-gray-300'}`}>
      <div className="flex items-center gap-4 mb-4">
        {logo && (
          <div className="flex-shrink-0 w-48">
            <img src={logo} alt={`${company} logo`} className="h-auto w-full object-contain" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
          <h4 className="text-lg font-medium text-blue-600 mb-2">{company}</h4>
          <div className="flex items-center text-gray-500">
            <Calendar size={16} className="mr-2" />
            <span>{period}</span>
          </div>
        </div>
      </div>
      <ul className="space-y-4 text-gray-600">
        {description.map((item, index) => (
          <li key={index} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
          
          <div className="mt-12">
            <ExperienceItem 
              title="Principal"
              company="Eightfold Consulting"
              period="2014 - Present"
              description={[
                "Lead modernization and digital transformation projects focused on Medicare and Medicaid programs.",
                "Provide strategic consulting to align healthcare operations with regulatory and technological changes.",
                "Architect practical, scalable solutions that blend policy insight with technical execution.",
                "Drive business development through capture strategy, solutioning, and RFP leadership.",
                "Implement AI and Robotic Process Automation (RPA) to streamline operations and enable forward-looking innovation."
              ]}
              current={true}
              logo="/eightfold-logo.png"
            />
            
            <ExperienceItem 
              title="Senior Consultant"
              company="BRYJ, Inc."
              period="2022 - Present"
              description={[
                "Spearhead the development of Bubinga, an AI-driven document intelligence platform designed to automate and streamline healthcare workflows.",
                "Collaborate with healthcare organizations to bridge IT and operations, aligning technological solutions with business strategies.",
                "Facilitate the adoption of interoperability standards, including FHIR, to improve data exchange and patient care.",
                "Provide strategic guidance on RFP processes, vendor selection, and implementation of innovative healthcare technologies."
              ]}
              current={true}
              logo="/bryj-logo.png"
            />
            
            <ExperienceItem 
              title="Program Manager – Healthcare Technology"
              company="Noridian Healthcare Solutions"
              period="Prior to 2014"
              description={[
                "Managed large-scale IT projects supporting Medicare and Medicaid administrative functions.",
                "Led initiatives to modernize claims processing, provider management, and customer service operations.",
                "Collaborated with federal and state agencies to ensure compliance with healthcare regulations.",
                "Implemented technology solutions that improved operational efficiency and reduced administrative costs."
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;