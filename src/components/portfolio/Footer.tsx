
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Saken Rai</h3>
              <p className="text-gray-300 mb-4">
                Software Engineer & Aspiring AI Engineer passionate about creating 
                innovative solutions and solving complex problems.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/raisaken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/raisaken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:saken.rai.34@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <p className="text-gray-300 mb-2">saken.rai.34@gmail.com</p>
              {/* <p className="text-gray-300 mb-4">+1 (555) 123-4567</p> */}
              <p className="text-gray-300">East London, UK</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Saken Rai
            </p>
            <p className="text-gray-400 text-sm mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
