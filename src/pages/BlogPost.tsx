import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, you'd fetch this based on the ID
  const blogPosts = [
    {
      id: 1,
      title: "How to create Professional Github Readme Profile (Step By Step)",
      content: (
        <div
          dangerouslySetInnerHTML={{
            __html: `Create Github Readme Profile using Github Profile readme Generator for Professional looking Github Resume. In this Blog we will learn How to create next level Github profile using online github readme profile Generator. Having a professional Github portfolio can help you a lot to showcase your skills, add contacts and even get a remote Jobs.
     
            Github Readme Generator: <a style="color: blue;" href="https://rahuldkjain.github.io/gh-profile-readme-generator/" target="_blank">https://rahuldkjain.github.io/gh-profile-readme-generator/</a>
     
      Github Profile Readme Generator: <a style="color: blue;" href=" https://profile-readme-generator.com/" target="_blank"> https://profile-readme-generator.com/</a>
     
      Github Repo with all cool Portfolio: <a style="color: blue;" href="https://github.com/abhisheknaiidu/awesome-github-profile-readme" target="_blank">https://github.com/abhisheknaiidu/awesome-github-profile-readme</a>
      
      `,
          }}
        />
      ),
      category: "Git",
      date: "2025-07-06",
      readTime: "2 min read",
      tags: [
        "Tools & Utilities",
        "Open Source",
        "Web Development",
        "DevOps",
        "Git",
        "Documentation",
        "Project Management",
        "Beginner Tutorials",
      ],
      image:
        "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/github-profile-readme-generator.gif",
    },
    {
      id: 2,
      title: "AI engineer Roadmap",
      content: (
        <div
          dangerouslySetInnerHTML={{
            __html: `-> Python(Numpy, Pandas, Matplotlib) 
            -> Math(Linear Algebra, Calculus, Stat and Probability ) 
            -> ML(Supervised, Unsupervised, Clustering, Regression) 
            -> CNN, RNN with TensorFlow, PyTorch, scikit-learn 
            -> Domain Specialization(NLP, Computer Vision, Gen AI) 
            -> Projects(Chatbots, Image Classifiers, ML models)
            -> Portfolio Building, Lots of Kaggle Competition`,
          }}
        />
      ),
      category: "AI/ML",
      date: "2025-07-11",
      readTime: "2 min read",
      tags: ["Machine Learning", "Deep Learning"],
      image: "https://i.imghippo.com/files/mJM9533eUo.png",
    },
    {
      id: 3,
      title: "Obsession",
      content: (
        <div
          dangerouslySetInnerHTML={{
            __html: `The magic behind <b>SUCCESS</b>`,
          }}
        />
      ),
      category: "Life",
      date: "2025-07-11",
      readTime: "2 min read",
      tags: ['Life',"Success"],
      image: "",
    },
  ];

  const post = blogPosts.find((p) => p.id === parseInt(id || "1"));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Blog Post Not Found
          </h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/blog/${post.id}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          url: shareUrl,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      // You could add a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
        <meta
          name="keywords"
          content="AI, machine learning, Python, blog, @raiskaen, Saken Rai, Deep Learning, front-end developement, fullstack developement"
        />
        <meta name="author" content="@raisaken" />
        <meta name="robots" content="index, follow" />
        </Helmet>
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>

                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4">
                    {post.category}
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                    {post.title}
                  </h1>

                  <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                    <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>

                    <Button
                      onClick={handleShare}
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="aspect-video overflow-hidden rounded-lg mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Blog Content */}
          <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {post.content}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Enjoyed this article?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Check out more articles on software engineering, AI/ML, and
                  competitive programming.
                </p>
                <Link to="/blog">
                  <Button size="lg">View More Articles</Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
    </div>
  );
};

export default BlogPost;
