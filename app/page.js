"use client";

import Banner from "@/components/Banner";
import MyContact from "@/components/Contact";
import MyExperience from "@/components/Experience";
import MyPortfolio from "@/components/MyPortfolio";
import MyServices from "@/components/MyServices";
import MySkills from "@/components/MySkills";
import Navbar from "@/components/navbar";
import MyTestimonials from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans overflow-hidden">

      <Navbar />

      <main className="px-1 md:px-14">
        <Banner />
        <MyServices />
        <MySkills />
        <MyExperience />
        <MyPortfolio />
        <MyTestimonials />
        <MyContact />
      </main>

      {/* Footer */}
      <footer className="w-full text-gray-500 mt-20 py-10 border-t border-white/10 text-center">
        © 2025 Tanvir — All Rights Reserved.
      </footer>
    </div>
  );
}
