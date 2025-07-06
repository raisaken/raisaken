
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "How to create Professional Github Readme Profile (Step By Step)",
      excerpt: "Create Github Readme Profile using Github Profile readme Generator for Professional looking Github Resume. In this Blog we will learn to create next level Github profile using online github readme profile Generator. Having a professional Github portfolio can help you a lot to showcase your skills, add contacts and even get a remote Jobs.",
      category: "Git",
      date: "2025-07-06",
      readTime: "2 min read",
      tags: ["Tools & Utilities","Open Source","Web Development", "DevOps", "Git", "Documentation", "Project Management","Beginner Tutorials"],
      image: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/github-profile-readme-generator.gif"
    },
    {
      id: 10,
      title: "Building Scalable AI Applications with React and TensorFlow",
      excerpt: "Learn how to integrate machine learning models into React applications for real-time predictions and data processing.",
      category: "AI/ML",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TensorFlow", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&h=300"
    },
    {
      id: 20,
      title: "Advanced Dynamic Programming Techniques for Competitive Programming",
      excerpt: "Deep dive into complex DP patterns and optimization techniques used in competitive programming contests.",
      category: "Algorithms",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["Algorithms", "Dynamic Programming", "LeetCode"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=600&h=300"
    },
    {
      id: 30,
      title: "Modern React Patterns: From Hooks to Server Components",
      excerpt: "Exploring the latest React patterns and best practices for building maintainable applications in 2024.",
      category: "Web Development",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["React", "Hooks", "Server Components"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&h=300"
    },
    {
      id: 40,
      title: "Natural Language Processing with Transformers",
      excerpt: "Understanding transformer architecture and implementing NLP models for text classification and generation.",
      category: "AI/ML",
      date: "2023-12-28",
      readTime: "15 min read",
      tags: ["NLP", "Transformers", "Python"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=300"
    },
    {
      id: 50,
      title: "System Design: Building Distributed Systems at Scale",
      excerpt: "Key principles and patterns for designing scalable distributed systems with real-world examples.",
      category: "System Design",
      date: "2023-12-20",
      readTime: "20 min read",
      tags: ["System Design", "Distributed Systems", "Architecture"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=300"
    }
  ];

  const categories = ["All", "AI/ML", "Algorithms", "Web Development", "System Design","Git"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Tech Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Insights on software engineering, AI/ML, algorithms, and technology trends
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;