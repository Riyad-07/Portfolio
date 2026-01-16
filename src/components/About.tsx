import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Calendar, BookOpen } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated web developer with a passion for creating beautiful and functional websites
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Current Role</h3>
                    <p className="text-muted-foreground mb-2">
                      Web Developer at <span className="text-foreground font-medium">SM Technology</span>
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Since January 1, 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      Bachelor of Business Administration (BBA)
                    </p>
                    <p className="text-sm text-muted-foreground">Completed in 2021</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Training & Certifications
              </h3>

              <div className="space-y-4">
                <div className="glass-card rounded-xl p-5 hover-lift">
                  <h4 className="font-semibold mb-1">Sigma 7.0 – DSA + Development</h4>
                  <p className="text-sm text-muted-foreground mb-2">Apna College, India</p>
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <Calendar className="w-3 h-3" />
                    Started March 28, 2025
                  </div>
                </div>

                <div className="glass-card rounded-xl p-5 hover-lift">
                  <h4 className="font-semibold mb-1">Front-End Development with React</h4>
                  <p className="text-sm text-muted-foreground mb-2">Creative IT Institute, Dhaka, Bangladesh</p>
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <Calendar className="w-3 h-3" />
                    January 2024 – September 2024
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-5 bg-primary/5 border-primary/20">
                <p className="text-sm">
                  I combine my business background with technical expertise to build 
                  web solutions that are not only functional but also aligned with 
                  business objectives and user needs.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
