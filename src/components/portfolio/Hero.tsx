
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-40 pl-10 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">Saken Rai</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-2">
              Software Engineer
            </p>
            <p className="text-lg lg:text-xl text-gray-500 dark:text-gray-400 mb-6">
              Aspiring AI Engineer & LeetCode Enthusiast
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Passionate about creating innovative solutions through code and exploring the frontiers of artificial intelligence. 
              I love solving complex problems and continuously learning new technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Download className="w-4 h-4 mr-2" />
                <a href="./Saken-Rai-CV.pdf" download={"Saken-Rai-CV.pdf"}>Download CV</a>
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/raisaken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/raisaken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <img
                  // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400"
                  src="./zoro.svg"
                  alt="Profile"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                <div className="text-2xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};