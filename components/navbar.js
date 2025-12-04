"use client";
import React from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        w-[92%] md:w-[83%]

        px-6 py-3 
        flex items-center justify-between

        bg-white/4 backdrop-blur-xl
        border border-white/15 
        rounded-2xl

        shadow-[0_0_25px_rgba(255,255,255,0.07)]
      "
    >
      {/* LEFT LOGO + TITLE */}
      <div className="flex items-center gap-4">

        {/* FLOATING CUBE */}
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="
            w-11 h-11 rounded-xl 
            bg-white/5 
            border border-white/15
            shadow-[0_0_12px_rgba(255,255,255,0.18)]
            flex items-center justify-center
            text-mint-200 font-bold text-lg 
            tracking-wider
          "
        >
          MB
        </motion.div>

        {/* TEXT */}
        <div className="flex flex-col leading-tight">
          <span className="text-mint-200 font-medium tracking-wide text-sm">
            MD BAIZID TANVIR
          </span>

          <span className="text-[10px] text-white/50 tracking-widest">
            FULL-STACK WEB Developer

          </span>
        </div>
      </div>

      {/* DESKTOP RIGHT AREA */}
      <nav className="hidden md:flex items-center gap-8">

        <span className="text-mint-200 text-sm tracking-widest opacity-80">
          mdbaizidtanvir@gmail.com
        </span>

        {/* DESKTOP MENU ICON */}
        <Drawer>
          <DrawerTrigger asChild>
            <motion.button
              whileTap={{ scale: 0.88 }}
              aria-label="Open Menu"
              className="
                text-gray-200  cursor-pointer text-3xl font-light
                hover:opacity-90 transition
              "
            >
              ☰
            </motion.button>
          </DrawerTrigger>

          <DrawerContent
            side="right"
            className="
              bg-[#0A0A0A]/95 backdrop-blur-2xl 
               
              p-6 
              border-l border-white/10
              shadow-[0_0_30px_rgba(255,255,255,0.05)]
            "
          >
            <DrawerHeader>
              <DrawerTitle className="text-lg font-bold tracking-widest">
                NAVIGATION
              </DrawerTitle>
            </DrawerHeader>

            <div className="flex flex-col items-start gap-6 mt-5 text-lg tracking-wide">
              {[
                "home",
                "experience",
                "services",
                "skills",
                "portfolio",
                "contact",
              ].map((i) => (
                <DrawerClose asChild key={i}>
                  <Link
                    className="
                      hover:text-white transition-colors 
                      block text-gray-200
                    "
                    href={`#${i}`}
                  >
                    {i.toUpperCase()}
                  </Link>
                </DrawerClose>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </nav>

      {/* MOBILE MENU (separate position) */}
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <motion.button
              whileTap={{ scale: 0.88 }}
              aria-label="Open Menu"
              className="text-green-400 text-3xl font-light"
            >
              ☰
            </motion.button>
          </DrawerTrigger>

          <DrawerContent
            side="right"
            className="
              bg-[#0A0A0A]/95 backdrop-blur-2xl 
              text-green-400 
              p-6 
              border-l border-white/10
            "
          >
            <DrawerHeader>
              <DrawerTitle className="text-lg font-bold tracking-widest">
                MENU
              </DrawerTitle>
            </DrawerHeader>

            <div className="flex flex-col items-start gap-6 mt-5 text-lg tracking-wide">
              {[
                "home",
                "experience",
                "services",
                "skills",
                "portfolio",
                "contact",
              ].map((i) => (
                <DrawerClose asChild key={i}>
                  <Link
                    className="hover:text-white transition-colors"
                    href={`#${i}`}
                  >
                    {i.toUpperCase()}
                  </Link>
                </DrawerClose>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.header>
  );
}
