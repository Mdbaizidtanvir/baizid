"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Play,Minimize2  } from "lucide-react";
import Image from "next/image";
import Manki from "../public/project/Manki.png";
import Chabot from "../public/project/chatbot.png";
import RESTRUANT from "../public/project/res.png";
import TechEcommarce from "../public/project/Tech-Ecommarce.png";
import Elearinig from "../public/project/E-learing.png";
import tradingbot from "../public/project/trading-bot.png";
import rebotT from "../public/project/Rebot.png";
import rusome from "../public/project/Resume.png";
import fashion from "../public/project/fashion.png";


import ReactPlayer from "react-player";

export default function MyPortfolio() {
  const [videoId, setVideoId] = useState(null); // Track which project video is active

   const projects = [
    {
      id: 1,
      image: Manki,
      category: "Web Application",
      title: "Fashion Ecommerce (For Mankioficial)",
      link: "https://mankioficial.com",
      description:
        "A scalable, modern fashion e-commerce platform built for Mankioficial — featuring dynamic product management, smooth checkout, fast performance, and a clean, responsive shopping experience.",
      tech: ["Python", "Django", "API", "TailwindCSS", "Next.js"],
    },
    {
      id: 2,
      image: Chabot,
      category: "Web Application",
      title: "SaaS AI Chatbot Platform",
      link: "https://django-chatbot-saas.onrender.com/",
      video:"https://res.cloudinary.com/dzvkdsogk/video/upload/v1764837211/SaasAI_cnbktz.mp4",

      description:
        "AI chatbot platform with signup, subscriptions, domain integration, and file/knowledge base training. Embeddable chat agent for intelligent automated support.",
      tech: ["Python", "Javascript", "API", "TailwindCSS", "Django", "Vector DB"],
    },
    {
      id: 3,
      image: RESTRUANT,
      category: "Web Application",
      title: "Chicken Restaurant Foodies Platform",
      link: "https://chicken-and-restaurant-foodies.onrender.com/",
      description:
        "Modern restaurant ordering platform with dynamic menus, live order tracking, real-time inventory, and fast checkout. Admin-friendly backend included.",
      tech: ["Python", "Javascript", "API", "TailwindCSS", "Django", "Real-Time System"],
          video:"https://res.cloudinary.com/dzvkdsogk/video/upload/v1764837238/Foodies_schyma.mp4",

    },
    {
      id: 4,
      image: TechEcommarce,
      category: "Web Application",
      title: "Gadget Ecommerce Tech",
      link: "https://django-ecommarce.onrender.com/",
      video:"https://res.cloudinary.com/dzvkdsogk/video/upload/v1764837173/ecommarce_gb5wf2.mp4",

      description:
        "Feature-rich gadget ecommerce platform with advanced filtering, real-time stock updates, smart search, and admin dashboard for products & orders.",
      tech: ["Python", "Live Chat", "API", "TailwindCSS", "Django", "Real-Time System"],
    },
    {
      id: 5,
      image: Elearinig,
      category: "Web Application",
      title: "E-learning SaaS Platform",
      link: "https://elearning-front-end.vercel.app/",
      description:
        "Scalable E-learning SaaS platform for courses, enrollment, instructors, payments, and dashboards for learners and creators.",
      tech: ["Python", "Next.js", "Payment", "TailwindCSS", "Django", "SaaS"],
    },
    {
      id: 6,
      image: tradingbot,
      category: "AI Intelligence Robot",
      title: "AI Trading Intelligence Robot High Frequency",
      link: "https://github.com/Mdbaizidtanvir/Automated-Trading-bot-high-frequency",
      video:"https://res.cloudinary.com/dzvkdsogk/video/upload/v1765040392/Trading-bot_lljhce.mp4",
      description:
        "Advanced AI trading robot analyzing market trends, detecting patterns, and executing high-precision trades using real-time data, MT5 integration, and AI models.",
      tech: ["Python", "MT5", "Vector Embeddings", "Ollama Model Training"],
    },
    {
      id: 7,
      image: '/project/cox.png',
      category: "Web Application",
      title: "AI Trip Planner",
      link: "https://coxsai.com/",
      description:
        "AI Trip Planner Users can enter their destination, budget, and travel style, and the AI automatically generates a full itinerary — including places to visit, activities, hotels, and food recommendations. Fast, easy, and intelligent, it removes the stress of planning and delivers a perfect travel plan every time.",
      tech: ["Python", "OpenAi", "Booking Api", "Django","Nextjs"],
    },
    {
      id: 8,
      image: '/project/band.png',
      category: "Web Application",
      title: "Minimalist Design Web Page",
      link: "https://realestatetheband.com/#",
      description:
        "Modern web-based Animated templates, Minimalist GSAP for Realestatetheband",
      tech: ["Next.js", "Tailwind CSS", "GSAP" ,],
    },
    {
      id: 9,
      image: fashion,
      category: "Web Application",
      title: "Fashion Ecommarce",
      link: "https://fashion-ecommerce-ns0t.onrender.com/",
      video: "https://res.cloudinary.com/dzvkdsogk/video/upload/v1764837194/fashion-ecommerce_xtjola.mp4",

      description:
      "A modern fashion e-commerce platform with fast checkout and smart filtering. Customers can add items to cart, make secure payments, and track orders easily. Includes a return request system and complete order management. Admin has full control over products, pricing, inventory, and customer orders.",
      tech: ["Python", "Next.js", "Tailwind CSS"], 
    },

     {
      id: 10,
      image: '/project/appo.png',
      category: "Web Application",
      title: "Healthcare Appointments",
      link: "https://hc-appointment-booking.vercel.app/",

      description:
        "Connect with healthcare professionals and manage your appointments with ease. Our platform streamlines the booking process for both patients and doctors.",
      tech: ["Django", "Next.js", "Tailwind CSS"],
    },
    
  ];

  // Scroll animation for depth effect
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [20, -10]);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative w-full py-20 bg-gradient-to-b from-black via-[#0f0f0f] to-black"
    >
      {/* Soft grid background */}
      <div className="absolute inset-0 opacity-[0.05]  bg-cover"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-left mb-16 relative z-10 w-[92%] md:w-[75%] mx-auto"
      >
        <h4 className="uppercase tracking-[0.35em] text-green-300/60 text-sm md:text-base">
          My Portfolio
        </h4>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2 text-green-400 drop-shadow-[0_0_20px_rgba(0,255,180,0.3)]">
          Look at my work & <span className="text-white">give me your feedback</span>
        </h1>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-[92%] md:w-[80%] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            style={{ scale, y }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 + index * 0.05, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            className="group relative rounded-2xl overflow-hidden bg-black/30 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,255,160,0.12)] hover:shadow-[0_0_40px_rgba(0,255,180,0.18)] cursor-pointer transition-all duration-500"
          >
            {/* Neon border on hover */}
            <div className="absolute inset-0 border border-green-300/20 rounded-2xl opacity-0 group-hover:opacity-50 transition duration-500 pointer-events-none"></div>

            {/* Project Image */}
            <div className="overflow-hidden rounded-t-2xl relative">
              <Image
                width={1000}
                height={400}
                className="w-full h-[300px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                src={project.image}
                alt={project.title}
              />
              {/* Watch Video Icon */}
          {/* Subtle Green Overlay */}
  <div className="absolute inset-0 bg-green-400/10 rounded-t-2xl pointer-events-none transition-opacity duration-500 group-hover:bg-green-400/20"></div>

  {/* Watch Video Icon */}
  {project.video && (
    <div
      className="
        absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-[#000000d6] rounded-full p-4 cursor-pointer
        flex items-center justify-center
        hover:scale-110 transition-transform duration-300
        animate-pulseGlow

      "
      onClick={() => setVideoId(project.id)}
    >
      <Play className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(0,255,150,0.7)] " />
    </div>
  )}


            </div>

            {/* Project Details */}
            <div className="p-4 space-y-3">
              <span className="inline-block bg-transparent border border-green-400/40 rounded-full py-1 px-3 text-xs font-medium text-green-200">
                {project.category}
              </span>

              <a href={project.link} target="_blank">
                <h2 className="text-lg md:text-xl font-semibold text-white transition">
                  {project.title}
                </h2>
              </a>

              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-green-400 text-black px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>


{/* Video Modal */}
{videoId && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center p-4 animate-fadeIn">
    <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl">

      {/* Close Button */}
      <button
        onClick={() => setVideoId(null)}
        className="absolute top-13 right-3 text-white bg-black/40 hover:bg-green-400/30 
                   transition p-2 rounded-full z-[1000]"
      >
        <Minimize2 className="w-6 h-6" />
      </button>

      {/* ReactPlayer */}
      <ReactPlayer
        src={projects.find((p) => p.id === videoId)?.video}
        controls={true}
        autoPlay={true}
        width="100%"
        height="600px"
        className="rounded-xl overflow-hidden"
      />
    </div>
  </div>
)}


    </section>
  );
}
