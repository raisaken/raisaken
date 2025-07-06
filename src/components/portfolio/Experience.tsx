
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "CedarGate Services",
      period: "2023 - 2024",
      location: "Kathmandu, Nepal",
      description: "Wrote industry-standard bug fixes for EZ-Cap. Analyzed existing systems written in Java, produced estimates, and modified them according to requirements. Performed code reviews, debugged and fixed software defects",
      technologies: ["React", "Node.js", "Java","PostGreSQL", "AWS", "Jira"]
    },
    {
      title: "Software Developer - B",
      company: "Great Bear Tech",
      period: "2022 - 2023",
      location: "Kathmandu, Nepal",
      description: "Optimized existing projects and new projects as per client requirements. Implemented interactive design to achieve client needs. Collaborated with other developers to fix bugs and add features as needed",
      technologies: ["Javascript", "Reactjs", "Nextjs", "PostgreSQL", "GitLab"]
    },
    {
      title: "Software Developer Intern",
      company: "Samsara - Project",
      period: "2022 - 2024",
      location: "Remote",
      description: "Developed and implemented front-end code to implement UI designs. Optimized Samsara(webapp) Core Web Vitals metrics, increasing the Lighthouse performance score from 48% to 78%. Collaborated with back-end developers to integrate backend code.",
      technologies: ["Javascript", "MySQL", "Reactjs", "Nextjs" , "Remix", "Socket.io", "Github"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Work Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800"></div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </h4>
                    
                    <div className="flex items-center mb-4">
                      <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
