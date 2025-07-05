
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Code Review Assistant",
      description: "A machine learning tool that analyzes code and provides intelligent suggestions for improvements, bug detection, and code quality enhancement.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=300",
      tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
      github: "https://github.com/yourusername/ai-code-review",
      demo: "https://ai-code-review-demo.vercel.app"
    },
    {
      title: "Real-time Chat Application",
      description: "A full-stack chat application with real-time messaging, file sharing, and video calling capabilities built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&h=300",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/yourusername/realtime-chat",
      demo: "https://realtime-chat-demo.vercel.app"
    },
    {
      title: "LeetCode Problem Tracker",
      description: "A comprehensive dashboard to track LeetCode problem-solving progress with analytics, patterns recognition, and performance insights.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=300",
      tags: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
      github: "https://github.com/yourusername/leetcode-tracker",
      demo: "https://leetcode-tracker-demo.vercel.app"
    },
    {
      title: "E-commerce Platform",
      description: "A scalable e-commerce solution with microservices architecture, payment integration, and advanced search capabilities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=300",
      tags: ["React", "Java Spring", "MySQL", "Docker"],
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "Smart Home IoT Dashboard",
      description: "An IoT dashboard for monitoring and controlling smart home devices with real-time data visualization and automation features.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=300",
      tags: ["Vue.js", "Python", "MQTT", "InfluxDB"],
      github: "https://github.com/yourusername/smart-home-dashboard",
      demo: "https://smart-home-demo.vercel.app"
    },
    {
      title: "Neural Network Visualizer",
      description: "An interactive web application for visualizing neural network architectures and training processes in real-time.",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&h=300",
      tags: ["D3.js", "Python Flask", "TensorFlow", "WebSocket"],
      github: "https://github.com/yourusername/neural-network-viz",
      demo: "https://neural-network-viz.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
