import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Devzone - A community chat app for devs",
      description:
        `DevZone is the ultimate chat platform for developers
to connect, collaborate, and code together. Join the conversation and level up your coding journey.`,
      tags: ["Zustand", "Supabase", "Shadcn Ui", "Nextjs"],
      link: "https://devzone-ti.vercel.app/",
    },
   
    {
      title: "itZmyLink- One Page many Links",
      description:
        "itZmyLink is a simple platform where user can create a personalized page to showcase all your social media profiles in one place. ",
      tags: ["Nextjs", "Typescript", "Shadcn Ui"],
      link: "https://github.com/taqui-786/itZmyLink",
    },
    {
      title: "GitEstimate- Github estimate worth generator",
      description:
        "GitEstimate is a simple fun tool where user can generate their github estimate worth card just by entering their github username. ",
      tags: ["Nextjs", "Typescript", "Shadcn Ui"],
      link: "https://github.com/taqui-786/GitEstimate",
    },
    {
      title: "Mixcn-ui- Reusable components for Nextjs",
      description:
        "This is Nextjs app with a Collection of Nextjs Components - (Currently under Devlelopment) ",
      tags: ["Nextjs", "Shadcnui", "Npx","Library"],
      link: "https://mixcn-ui.vercel.app",
    },
    {
      title: "Rupeespot- All deals Product in one place",
      description:
        "This is a free tool to check price history charts for millions of products for popular Indian stores such as Amazon and Flipkart. ",
      tags: ["Nextjs", "Freelancing", "MySQL"],
      link: "https://rupeespot.com/",
    },
    {
      title: "Formcraft- Build Type-Safe Forms with Zero Effort",
      description:
        "Create production-ready forms with Zod validation, React Hook Form, and TypeScript. Design, customize, and deploy in minutes.",
      tags: ["Nextjs", "Shadcnui", "Zod", "React Hook Form "],
      link: "https://formcraft-ti.vercel.app/",
    },
    
    {
      title: "KryptoKapital- Investing in Cryptocurreny",
      description:
        "This is a platform for learning about cryptocurrency with many tools and festures. It is very big project. ",
      tags: ["Nextjs", "Freelancing", "Supabase"],
      link: "https://pro.kryptokapital.info/",
    },
    {
      title: "FriendZ - A social media Platform",
      description:
        "FriendZ is a social media app made with modern tech stacks such as redis, Authjs etc. A user can Create, delete, like, comment Post. ",
      tags: ["Redis", "Authjs", "Typescript", "Nextjs"],
      link: "https://github.com/taqui-786/project-friendz",
    },
    {
      title: "ChatApp- Simple instagram clone",
      description:
        "ChatApp is similar to instagram, you can create, edit, delete, like,comment, post and  Follow, unfollow users",
      tags: ["Reactjs", "Javascript"],
      link: "https://github.com/taqui-786/chatapp-api",
    },
    {
      title: "Devletter - A Newsletter for devs",
      description:
        "Devletter ia a newsletter subscribing single page app made with Nextjs and Tailwindcss.",
      tags: ["Nextjs", "Tailwindcss"],
      link: "https://github.com/taqui-786/Devletter",
    },
    {
      title: "CrouMaker - A Crousal Maker App",
      description:
        "Crousal Maker is a tool with in-built crousals templates edit and download it in any format.",
      tags: ["Nextjs", "jsPDF", "html2canvas", "Shadcn Ui"],
      link: "https://github.com/taqui-786/crousal-maker",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
