import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Healthcare",
      skills: ["Medicare", "Medicaid", "Healthcare Interoperability", "FHIR & HL7", "Healthcare Analytics"]
    },
    {
      title: "Strategic Consulting",
      skills: ["Strategic Planning", "RFP Development", "Business Analysis", "Project Management", "Change Management"]
    },
    {
      title: "Solution Architecture",
      skills: ["System Integration", "API Design", "Architecture Planning", "Technical Leadership", "Security & Compliance"]
    },
    {
      title: "Development",
      skills: ["Full-Stack Development", "Healthcare APIs", "Database Design", "Cloud Solutions", "Modern Web Technologies"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;