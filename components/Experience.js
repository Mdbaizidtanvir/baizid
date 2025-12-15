"use client";
import React from "react";
import { motion } from "framer-motion";
import { AlignStartHorizontal } from "lucide-react";
export default function MyExperience() {
  return (
    <section
      id="experience"
      className="
        relative w-full py-20 mt-20 
      
      "
    >
      {/* Soft grid background */}
      <div className="absolute inset-0 opacity-[0.05]  bg-cover"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h4 className="uppercase tracking-[0.35em] text-green-300/60 text-sm">
          PROFESSIONAL JOURNEY
        </h4>

        <h1
          className="
            text-3xl md:text-4xl font-extrabold mt-2 
            text-green-400 drop-shadow-[0_0_20px_rgba(0,255,180,0.3)]
          "
        >
          EXPERIENCE & <span className="text-white">WORK</span>
        </h1>
      </motion.div>

      {/* Cards Container */}
      <div className="relative z-10 w-[92%] md:w-[75%] mx-auto space-y-10">

        {/* --- CARD 1 --- */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            group px-2 py-2 md:p-10 rounded-2xl 
            bg-black/30 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_35px_rgba(0,255,160,0.12)]
            hover:shadow-[0_0_45px_rgba(0,255,180,0.18)]
            transition-all duration-500
            relative overflow-hidden
          "
        >
          {/* family-war neon border effect */}
          <div
            className="
              absolute inset-0 border border-green-300/20 rounded-2xl 
              opacity-0 group-hover:opacity-40 transition duration-500
              pointer-events-none
            "
          ></div>

          <div className="flex items-center gap-2 md:gap-4 mb-4">
            <div
              className="
                w-14 md:w-12 h-12 rounded-full bg-green-300/20 
                border border-green-300/40 
                flex items-center justify-center
                shadow-[0_0_20px_rgba(0,255,160,0.25)]
              "
            >
              <AlignStartHorizontal
                className="w-6 h-6"
              />
            </div>

            <div>
              <h2 className="text-sm md:text-xl font-semibold text-white">
                E-commerce Full Stack Developer
              </h2>
              <p className="text-white/60 text-sm">
                mankioficial.com • Remote — Argentina • 2022 — 2023
              </p>
            </div>
          </div>

        <div className="text-white/70 md:px-3  space-y-1 text-sm md:text-[14px]">
  <p>
    Built a full E-commerce platform including frontend architecture,
    routing, admin workflows, scalable backend systems, and automated operations.
  </p>
  <p>
    Designed Next.js interfaces with optimized rendering, dynamic product
    generation, responsive layouts, and SEO-ready pages.
  </p>
  <p>
    Developed Django backend for authentication, payments, product management,
    order processing, and real-time customer interactions.
  </p>
  <p>
    Integrated Stripe workflows, custom APIs, and secure order-tracking pipelines.
  </p>
  <p>
    Implemented Redis caching, image optimization, pagination, and database
    indexing for high-performance, low-latency experiences.
  </p>
  <p>
    Collaborated remotely with cross-border teams to deploy reliable, scalable,
    production-grade E-commerce solutions.
  </p>
</div>


          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "E-commerce Platform",
              "Django",
              "API Integration",
              "Next.js",
              "Payment Systems",
            ].map((tag) => (
              <span
                key={tag}
                className="
                  text-black/80 bg-green-400 px-3 py-1 
                  rounded-full text-xs font-medium
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* --- CARD 2 --- */}
        <motion.div
          initial={{ opacity: 0, y: 90, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            group px-2 py-2 md:p-10 rounded-2xl 
            bg-black/30 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_35px_rgba(0,255,160,0.12)]
            hover:shadow-[0_0_45px_rgba(0,255,180,0.18)]
            transition-all duration-500
            relative overflow-hidden
          "
        >
          <div
            className="
              absolute inset-0 border border-green-300/20 rounded-2xl
              opacity-0 group-hover:opacity-40 transition duration-500
              pointer-events-none
            "
          ></div>

          <div className="flex items-center gap-2 md:gap-4 mb-4">
            <div
              className="
               w-14 md:w-12 h-12 rounded-full bg-green-300/20 
                border border-green-300/40 
                flex items-center justify-center
                shadow-[0_0_20px_rgba(0,255,160,0.25)]
              "
            >
              <AlignStartHorizontal
                className="w-6 h-6"
              />
            </div>

            <div>
              <h2 className="text-sm md:text-xl font-semibold text-white">
                Full Stack Web AI Integration Specialist
              </h2>
              <p className="text-white/60 text-sm">
                clickysoft.com • Remote — USA • 2023 — 2024
              </p>
            </div>

            
          </div>

        <div className="text-white/70 md:px-3  space-y-1 text-sm md:text-[14px]">
  <p>
    Architected and deployed automation systems powered by custom AI
    models, scalable APIs, and high-performance backend services.
  </p>
  <p>
    Worked with Next.js, Django, and microservices to deliver
    full-stack, production-ready web applications.
  </p>
  <p>
    Integrated vector DBs, embeddings, streaming pipelines, async workers,
    and LLM-powered agents for real-time intelligent operations.
  </p>
  <p>
    Designed intelligent dashboards, automated monitoring systems, and
    data-driven workflow engines for enterprise automation.
  </p>
  <p>
    Built end-to-end AI features including chatbot automation, content AI,
    autoreply systems, and smart data extraction pipelines.
  </p>
  <p>
    Collaborated with cross-functional remote teams to deliver scalable,
    secure, cloud-optimized architectures for U.S.-based clients.
  </p>
</div>

          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "Python",
"Django",
"Nextjs",
              "Custom Model Training",
              "Trading Bot Automation",
              "API Integration",
              "Vector Database",
              "AI Automation Systems",
            ].map((tag) => (
              <span
                key={tag}
                className="
                  text-black bg-green-300 px-3 py-1 
                  rounded-full text-xs font-medium
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
