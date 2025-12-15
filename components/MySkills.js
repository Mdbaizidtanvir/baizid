"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Skill images
import python from "@/public/skils/python.png";
import js from "@/public/skils/js.png";
import reactjs from "@/public/skils/reactjs.png";
import django from "@/public/skils/django.png";
import nextjs from "@/public/skils/nextjs.png";
import tawlindcss from "@/public/skils/tawlindcss.png";
import aws from "@/public/skils/aws.png";
import Soketio from "@/public/skils/soketio.png";
import stripe from "@/public/skils/stripe.png";
import openai from "@/public/skils/openai.png";
import github from "@/public/skils/github.png";
import Pinecone from "@/public/skils/pinecone.webp";
import Optimize from "@/public/skils/optimize.png";
import Radis from "@/public/skils/redis.webp";
import Jtw from "@/public/skils/jwt.webp";
import Security from "@/public/skils/security.webp";
import caching from "@/public/skils/catching.webp";
import Trading from "@/public/skils/trading.png";

export default function MySkills() {
  const skills = [
    { name: "Python", img: python },
    { name: "Django", img: django },
    { name: "JavaScript", img: js },
    { name: "React.js", img: reactjs },
    { name: "Next.js", img: nextjs },
    { name: "Tailwind CSS", img: tawlindcss },
    { name: "Soketio & Websoket", img: Soketio },
    { name: "OpenAi & API", img: openai },
    { name: "Git & Github", img: github },
    { name: "Stripe API", img: stripe },
    { name: "Pinecone Vector DB", img: Pinecone },
    { name: "Performance Optimization", img: Optimize },
    { name: "AWS S3 / EC2", img: aws },
    { name: "Redis", img: Radis },
    { name: "Caching & Indexing", img: caching },
    { name: "Security Best Practices", img: Security },
    { name: "JWT / Validation / Rate Limiting", img: Jtw },
    { name: "Trading Bot", img: Trading },
    { name: "Web Automation/Scraping", img: '/skils/Selenium.png' },

  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [30, -10]);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full py-20 "
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.05]  bg-cover"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h4 className="uppercase tracking-[0.35em] text-green-300/60 text-sm">
          MY SKILLS
        </h4>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2 text-white drop-shadow-[0_0_20px_rgba(0,255,180,0.3)]">
          Technologies & <span className="text-green-400"> Tools </span>
        </h1>
      </motion.div>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-[92%] md:w-[80%] mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            style={{ scale, y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 + index * 0.05, ease: "easeOut" }}
            className="
              group relative p-6 rounded-2xl
              bg-black/30 backdrop-blur-xl
              border border-white/10
              shadow-[0_0_25px_rgba(0,255,160,0.12)]
              hover:shadow-[0_0_40px_rgba(0,255,180,0.18)]
              transition-all duration-500
              cursor-pointer overflow-hidden
            "
          >
            {/* Neon/family-border effect */}
            <div className="absolute inset-0 border border-green-300/20 rounded-2xl opacity-0 group-hover:opacity-50 transition duration-500 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-4">
              <div
                className="
                  w-12 h-12 rounded-full bg-green-300/20
                  border border-green-400/40
                  flex items-center justify-center
                  shadow-[0_0_20px_rgba(0,255,160,0.25)]
                "
              >
                <Image src={skill.img} width={50} height={50} alt={skill.name} className="w-6 h-6" />
              </div>
              <h2 className="text-white font-semibold text-sm md:text-base">{skill.name}</h2>
            </div>

            {/* Neon underline */}
            <div className="w-[90%] h-[3px] bg-green-400/40 rounded-full mx-auto mt-2"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
