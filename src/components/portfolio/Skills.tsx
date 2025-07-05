
import { Code, Brain, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Software Engineering",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React/Next.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "SQL/NoSQL", level: 80 }
      ]
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: "TensorFlow/PyTorch", level: 70 },
        { name: "Scikit-learn", level: 75 },
        { name: "Natural Language Processing", level: 65 },
        { name: "Computer Vision", level: 60 },
        { name: "Deep Learning", level: 70 },
        { name: "Data Analysis", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-8 h-8" />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS/Cloud", level: 70 },
        { name: "Linux", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Agile/Scrum", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 dark:text-blue-400 mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};