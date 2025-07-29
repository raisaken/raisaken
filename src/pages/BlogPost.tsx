import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import data from '../data/blog/blog.json' 


const BlogPost = () => {
  const { id } = useParams();
  const post = data.find((p) => p.id === parseInt(id || "1"));

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

                {post?.image && <div className="aspect-video overflow-hidden rounded-lg mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain"
                  />
                </div>}
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
                    dangerouslySetInnerHTML={{ __html: post.content }}
                 />
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
