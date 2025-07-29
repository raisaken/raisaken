
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { GitHubStats } from "@/components/portfolio/GithubStats";
import { LeetCodeStats } from "@/components/portfolio/LeetCodeStats";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Aboutme = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Hero />
      {/* <About /> */}
      <Experience />
      <Projects />
      <Skills />
      {/* <GitHubStats /> */}
      {/* <LeetCodeStats /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Aboutme;