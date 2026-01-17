import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin, Download } from "lucide-react";
import React, { useState, useEffect } from "react";
import reactpng from "../../public/react.png"
import nodejspng from "../../public/nodejs.png"
import mongodb from "../../public/MongoDB.png"
import dsa from "../../public/dsa.png"
import express from "../../public/expressJs.png"
import algorithm from "../../public/algorithm.png"

const Hero = () => {

  const value = "Md Riyad Islam";
  const [displayText, setDisplayText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + value.charAt(count));
      setCount((prev) => prev + 1);

      if (count + 1 === value.length) {
        setTimeout(() => {
          setDisplayText("");
          setCount(0);
        }, 1000); // pause before restart
      }
    }, 300);

    return () => clearInterval(interval);
  }, [count]);



  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="section-container relative z-10 flex justify-between">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Currently working at SM Technology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "} <br />
            <span className="gradient-text">{displayText}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            A passionate <span className="text-foreground font-semibold">Web Developer</span> specializing in
            React.js, Shopify, WordPress, and Next.js. Building modern, responsive,
            and user-friendly web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a href="#contact" className="cta-primary">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1_TqQUFXtllIKnGE-qcQ4I3T_T67GHqSm/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </a>
            {/* <a
              href="https://github.com/Riyad-07"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a> */}

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <a
              href="mailto:riyadislam1998@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              riyadislam1998@gmail.com
            </a>
            <a
              href="tel:+8801521550925"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +880 1521 550925
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bangladesh
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="relative w-80 h-80 xl:w-96 xl:h-96">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
            <div className="absolute inset-4 rounded-full border-2 border-accent/20 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-8 rounded-full border-2 border-primary/30 animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Avatar container */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
              <div className="text-8xl font-bold gradient-text">RI</div>
            </div>

            {/* Floating elements */}


            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-14 left-[40%] -translate-x-1/2 px-4 py-2 rounded-lg glass-card text-sm font-mono text-center"
            >
              <img src={reactpng} alt="" className="h-10 w-10 mx-auto" />
              ReactJs
            </motion.div>


            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute top-[10%] -right-10 px-4 py-2 rounded-lg glass-card text-sm font-mono text-center"
            >
              <img src={nodejspng} alt="" className="h-10 w-10 mx-auto scale-150" /> 
              NodeJs           
            </motion.div>


            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[15%] -right-12 px-4 py-2 rounded-lg glass-card text-sm font-mono text-center"
            >
              <img src={mongodb} alt="" className="h-10 w-10 mx-auto" />
              MongoDB
            </motion.div>


            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              className="absolute -bottom-10 left-[40%] -translate-x-1/2 px-4 py-2 rounded-lg glass-card text-sm font-mono text-center"
            >
              <img src={express} alt="" className="h-10 w-10 mx-auto" />
              ExpressJs
            </motion.div>


            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              className="absolute bottom-[15%] -left-12 px-4 py-2 rounded-lg glass-card text-sm font-mono text-center"
            >
              <img src={dsa} alt="" className="h-10 w-10 mx-auto scale-125" />
              DSA
            </motion.div>


            <motion.div
              animate={{ y: [-6, 14, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
              className="absolute top-[10%] -left-10 px-4 py-2 rounded-lg glass-card text-sm font-mono text-center"
            >
              <img src={algorithm} alt="" className="h-10 w-10 mx-auto scale-125" />
              Algorithms
            </motion.div>

          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
