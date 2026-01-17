import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss,
  SiNodedotjs, SiExpress,
  SiMongodb, SiMysql,
  SiShopify, SiWordpress,
  SiGit, SiGithub, SiPostman, SiNextdotjs 
} from "react-icons/si";
import { TbApi, TbDatabase    } from "react-icons/tb";
import hoppscotch from "../../public/hoppscotch.jpg";
import { BiLogoVisualStudio } from "react-icons/bi";


interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  direction: "left" | "right";
  speed: "fast" | "normal" | "slow";
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    direction: "left",
    speed: "normal",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "React", icon: SiReact, color: "text-cyan-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
    ],
  },
  {
    title: "Backend",
    direction: "right",
    speed: "normal",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-foreground" },
    ],
  },
  {
    title: "Database",
    direction: "left",
    speed: "fast",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "SQL", icon: TbDatabase  , color: "text-sky-600" },
    ],
  },
  {
    title: "CMS",
    direction: "right",
    speed: "normal",
    skills: [
      { name: "Shopify (Liquid)", icon: SiShopify, color: "text-green-600" },
      { name: "WordPress", icon: SiWordpress, color: "text-blue-700" },
    ],
  },
  {
    title: "Tools",
    direction: "left",
    speed: "slow",
    skills: [
      { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-500" },
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-foreground" },
      { name: "REST API", icon: TbApi, color: "text-primary" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      {
      name: "Hoppscotch",
      icon: () => (
        <img src={hoppscotch} alt="Hoppscotch" className="h-6 w-6 object-contain rounded-sm" />
      ),
      color: "",
    },
    ],
  },
];

const getAnimationClass = (direction: "left" | "right", speed: "fast" | "normal" | "slow") => {
  if (direction === "right") return "animate-marquee-right";
  if (speed === "fast") return "animate-marquee-fast";
  if (speed === "slow") return "animate-marquee-slow";
  return "animate-marquee-left";
};

const SkillMarquee = ({ category }: { category: SkillCategory }) => {
  const animationClass = getAnimationClass(category.direction, category.speed);
  // Duplicate skills for seamless loop
  const duplicatedSkills = [...category.skills, ...category.skills, ...category.skills, ...category.skills, ...category.skills, ...category.skills, ...category.skills];

  return (
    <div className="marquee-pause overflow-hidden py-4 section-container">
      <div className={`flex gap-6 ${animationClass} `} style={{ width: "fit-content" }}>
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl shadow-soft border border-border/50 hover:shadow-medium hover:scale-105 transition-all duration-300 cursor-default"
          >
            <skill.icon className={`h-6 w-6 ${skill.color}`} />
            <span className="font-medium text-foreground whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30">
      <div className="section-container mb-12">
        <div className="text-center animate-fade-in-up">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            My Skills
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, databases, and modern development tools
          </p>
        </div>
      </div>

      <div className="space-y-8 px-5 ">
        {skillCategories.map((category, index) => (
          <div key={category.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="section-container mb-2 p-0">
              <h3 className=" text-muted-foreground uppercase tracking-wider gradient-text text-2xl sm:text-2xl md:text-3xl font-bold">
                {category.title}
              </h3>
            </div>
            <SkillMarquee category={category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
