import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

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
      id: 10,
      title: "Building Scalable AI Applications with React and TensorFlow",
      content: `
# Introduction

Artificial Intelligence is transforming the way we build web applications. In this comprehensive guide, we'll explore how to integrate machine learning models into React applications for real-time predictions and data processing.

## Setting Up TensorFlow.js

First, let's install the necessary dependencies:

\`\`\`bash
npm install @tensorflow/tfjs @tensorflow/tfjs-react-native
\`\`\`

## Loading Pre-trained Models

TensorFlow.js allows us to load pre-trained models directly in the browser:

\`\`\`javascript
import * as tf from '@tensorflow/tfjs';

const loadModel = async () => {
  const model = await tf.loadLayersModel('/path/to/model.json');
  return model;
};
\`\`\`

## Building the React Component

Here's how we can create a React component that uses our ML model:

\`\`\`jsx
import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const AIPredictor = () => {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const initModel = async () => {
      const loadedModel = await loadModel();
      setModel(loadedModel);
    };
    initModel();
  }, []);

  const makePrediction = async (inputData) => {
    if (model) {
      const prediction = model.predict(inputData);
      setPrediction(prediction);
    }
  };

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};
\`\`\`

## Performance Optimization

When working with ML models in React, consider these optimization strategies:

1. **Model Caching**: Cache loaded models to avoid re-loading
2. **Web Workers**: Use web workers for heavy computations
3. **Model Quantization**: Reduce model size for faster loading

## Real-world Applications

Some practical applications include:

- Image classification
- Sentiment analysis
- Recommendation systems
- Real-time object detection

## Conclusion

Integrating AI into React applications opens up endless possibilities for creating intelligent, responsive user experiences. The combination of TensorFlow.js and React provides a powerful platform for building the next generation of web applications.
      `,
      category: "AI/ML",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TensorFlow", "Machine Learning"],
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=600",
    },
    {
      id: 2,
      title:
        "Advanced Dynamic Programming Techniques for Competitive Programming",
      content: `
# Mastering Dynamic Programming

Dynamic Programming is one of the most powerful problem-solving techniques in competitive programming. Let's dive deep into advanced patterns and optimization strategies.

## State Space Reduction

One of the key skills in DP is recognizing when we can reduce the state space:

\`\`\`python
def fibonacci_optimized(n):
    if n <= 1:
        return n
    
    prev2, prev1 = 0, 1
    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2, prev1 = prev1, current
    
    return prev1
\`\`\`

## Advanced Patterns

### 1. Digit DP
Used for counting numbers with certain digit properties:

\`\`\`cpp
int digitDP(int pos, bool tight, bool started, string& num) {
    if (pos == num.length()) {
        return started ? 1 : 0;
    }
    
    if (dp[pos][tight][started] != -1) {
        return dp[pos][tight][started];
    }
    
    int limit = tight ? (num[pos] - '0') : 9;
    int result = 0;
    
    for (int digit = 0; digit <= limit; digit++) {
        bool newTight = tight && (digit == limit);
        bool newStarted = started || (digit > 0);
        result += digitDP(pos + 1, newTight, newStarted, num);
    }
    
    return dp[pos][tight][started] = result;
}
\`\`\`

### 2. Tree DP
Dynamic programming on trees:

\`\`\`cpp
void dfs(int node, int parent, vector<vector<int>>& adj) {
    dp[node][0] = 0; // not taking current node
    dp[node][1] = value[node]; // taking current node
    
    for (int child : adj[node]) {
        if (child != parent) {
            dfs(child, node, adj);
            dp[node][0] += max(dp[child][0], dp[child][1]);
            dp[node][1] += dp[child][0];
        }
    }
}
\`\`\`

## Optimization Techniques

1. **Space Optimization**: Rolling arrays
2. **Time Optimization**: Matrix exponentiation
3. **Memory Access**: Cache-friendly iterations

## Practice Problems

Here are some challenging problems to practice:
- LeetCode 312: Burst Balloons
- LeetCode 1420: Build Array Where You Can Find The Maximum Exactly K Comparisons
- Codeforces: Various contest problems

## Conclusion

Mastering these advanced DP techniques will significantly improve your competitive programming performance. Practice regularly and focus on recognizing patterns.
      `,
      category: "Algorithms",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["Algorithms", "Dynamic Programming", "LeetCode"],
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&h=600",
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
