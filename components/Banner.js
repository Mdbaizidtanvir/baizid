"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import Avatar from "../public/avatar.png";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      id="home"
      className="
        relative w-full px-2 md:px-16 pt-32 md:pb-20 
        overflow-hidden md:h-screen
        flex items-center
      "
    >
      {/* Soft Neon Background */}
      <div
        className="
          absolute inset-0 
         
        "
      />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-[0.07] grid-bg"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center md:gap-16 w-full">

        {/* LEFT — TEXT  */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:mt-[70px] md:mt-10 md:text-5xl font-black text-white leading-tight"
          >
            Web & Automation
            <span className="block text-green-400">Ai & Developer</span>
          </motion.h1>

          <p className="text-gray-300 mt-5 text-[16px] leading-relaxed">
            Building scalable systems, intelligent web applications, and modern UI
            experiences using <span className="text-green-400">Python, Django, React, and Next.js</span>,
            powered by high-efficiency Application.
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex justify-center md:justify-start gap-5">
            <Link
              href="#portfolio"
              className="
                px-6 py-2.5 rounded-xl transition 
                border border-green-400 text-green-300
                hover:scale-105
                shadow-[0_0_10px_rgba(0,255,150,0.2)]
              "
            >
              Explore Work
            </Link>

            <Link
              href={process.env.NEXT_PUBLIC_RESUME_URL}
              target="_blank"
              className="
                px-6 py-2.5 rounded-xl transition 
                border border-white/20 text-white
                hover:scale-105
                shadow-[0_0_10px_rgba(0,255,150,0.2)]
              "
            >
              Resume
            </Link>
          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Social href="https://github.com/mdbaizidtanvir" icon={<Github />} />
            <Social href="https://linkedin.com/in/mdbaizidtanvir" icon={<Linkedin />} />
            <Social href="https://facebook.com/devisbaizid" icon={<Facebook />} />
            <Social href="mailto:mdbaizidtanvir@gmail.com" icon={<Mail />} />
          </div>
        </div>

        {/* RIGHT — AVATAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full md:w-1/2 flex justify-center"
        >
          <div
            className="
              absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] 
              rounded-full bg-green-400/10 blur-3xl
            "
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Image
              src={Avatar}
              width={300}
              height={300}
              alt="md baizid tanvir"
              className="
                rounded-full border border-green-300/40
                shadow-[0_0_35px_rgba(0,255,100,0.3)]
                md:mt-8
              "
              loading="eager"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

/* SOCIAL ICON COMPONENT */
function Social({ href, icon }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
        p-3 rounded-xl border border-white/10 text-green-300
        hover:bg-white/5 transition hover:scale-105
        shadow-[0_0_12px_rgba(0,255,150,0.15)]
      "
    >
      {icon}
    </Link>
  );
}
