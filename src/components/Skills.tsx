import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "JavaScript (ES6+)", category: "Language" },
  { name: "React.js", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "Express.js", category: "Framework" },
  { name: "Node.js", category: "Runtime" },
  { name: "HTML5", category: "Markup" },
  { name: "CSS3", category: "Styling" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Bootstrap CSS", category: "Styling" },
  { name: "Shopify (Liquid)", category: "E-commerce" },
  { name: "WordPress", category: "CMS" },
  { name: "MongoDB", category: "Database" },
  { name: "SQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "REST APIs", category: "Backend" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Responsive Design", category: "Design" },
  { name: "Vercel", category: "Deployment" },
  { name: "Netlify", category: "Deployment" },
  { name: "Render", category: "Deployment" }
];

const platforms = [
  { name: "Shopify", experience: "8 months", current: true },
  { name: "WordPress", experience: "4 months", current: true },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="skill-badge cursor-default"
              >
                {skill.name}
              </motion.div>
            ))}
          </motion.div>



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
              <h4 className="text-lg font-semibold mb-4">What I Do</h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Custom Shopify theme section using Liquid
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Dynamic sections & responsive layouts
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  WordPress theme customization
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Plugin-based solutions
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
