"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import img1 from "@/public/1.webp";
import img2 from "@/public/2.webp";
import img3 from "@/public/3.webp";
import img4 from "@/public/4.webp";

const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "Build full-stack production-ready apps with Python, Django, React, and Next.js. Clean architecture, REST APIs, secure auth (JWT), Stripe payments, and dashboards that scale.",
    image: img1,
  },
  {
    title: "AI Chatbots & Semantic Search",
    description:
      "Build AI assistants powered by OpenAI, LangChain, and vector embeddings. Train on your data, integrate into any site, and deliver context-aware support.",
    image: img2,
  },
  {
    title: "Real-Time & Scalable Systems",
    description:
      "Build real-time features with WebSockets, notifications, and optimized backends. Redis caching, indexing, and scalable deployment on AWS.",
    image: img3,
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "Improve ranking and UX with SSR/ISR, caching, code-splitting, and Core Web Vitals. Boost organic traffic with clean, optimized code.",
    image: img4,
  },
];

export default function MyServices() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -10]);

  return (
    <section
      id="services"
      className="relative w-full py-20 "
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.05]  bg-cover"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h4 className="uppercase tracking-[0.35em] text-green-300/60 text-sm">My Services</h4>
        <h1  className="
            text-3xl md:text-4xl font-extrabold mt-2 
            drop-shadow-[0_0_20px_rgba(0,255,180,0.3)]
            uppercase
            text-white
          ">
          Turn <div className="text-green-400 ">Information Into</div> 
        </h1>
      </motion.div>

      {/* Cards Grid */}
      <div ref={ref} className="relative z-10 w-[92%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            style={{ scale, y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 + index * 0.1, ease: "easeOut" }}
            className="
              relative group p-6 rounded-2xl 
              bg-gradient-to-tr from-[#1a0a1a]/30 to-[#0a111a]/30
              backdrop-blur-xl
              border border-cyan-400/20
              shadow-[0_0_25px_rgba(0,255,255,0.12)]
              hover:shadow-[0_0_40px_rgba(138,43,226,0.15)]
              transition-all duration-500
              overflow-hidden
            "
          >
            {/* Family-connected border / holo glow */}
            <div className="absolute inset-0 border border-purple-400/30 rounded-2xl opacity-0 group-hover:opacity-50 transition duration-500 pointer-events-none"></div>

            <Image src={service.image} width={90} height={90} alt="service image" className="mb-4 relative z-10" />
            <h2 className="text-xl font-semibold mb-2 text-gray-200 relative z-10">{service.title}</h2>
            <p className="text-white/70 text-sm leading-relaxed relative z-10">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
