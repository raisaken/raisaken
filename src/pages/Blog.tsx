import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import data from '../data/blog/blog.json'; 
// import data from './data/data';


const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "AI/ML",
    "Algorithms",
    "Web Development",
    "System Design",
    "Git",
    "Life",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? data
      : data.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        {/* <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Tech Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Insights on software engineering, AI/ML, algorithms, and
                technology trends
              </p>
            </div>
          </div>
        </section> */}

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
                  <Card
                    key={post.id}
                    className="group hover:shadow-lg transition-shadow"
                  >
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
                      <Link to={`/blog/${post.id}`}>
                        <CardTitle className="line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </CardTitle>
                      </Link>
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
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
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
