import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Aboutme from "./pages/Aboutme";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Helmet>
          <title>Saken Rai - AI/ML Enthusiast</title>
          <meta
            name="description"
            content="Personal portfolio of @raisaken, a full-stack developer transitioning to AI/ML, showcasing projects in Python, machine learning, and data science."
          />
          <meta
            name="keywords"
            content="AI, machine learning, Python, full-stack developer, @raisaken, portfolio, Saken Rai, Rai Saken, Deep Learning"
          />
          <meta name="author" content="@raisaken" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Blog />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<Aboutme />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
