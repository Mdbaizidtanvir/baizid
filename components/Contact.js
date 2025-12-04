"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Github, MessageCircle } from "lucide-react";

export default function MyContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ---- FAKE SEND MESSAGE SYSTEM ----
    setTimeout(() => {
      setLoading(false);
      alert("Your message was sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-black via-[#0f0f0f] to-black rounded-xl relative">
      <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="uppercase tracking-[0.35em] text-green-300/60 text-sm md:text-base">Get In Touch</h4>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4 leading-[1.2] text-green-400 drop-shadow-[0_0_25px_rgba(0,255,160,0.3)]">
            Let's make your <br /> <span className="text-white"> brand brilliant!</span>
          </h1>
          <p className="text-gray-300 mt-4 leading-[24px]">
            If you would like to work with me or just want to get in touch, I'd love to hear from you!
          </p>

          <div className="mt-6">
            <a href="tel:+8801321284815" className="text-green-400 text-3xl font-semibold underline">
              +880 01321284815
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-5 mt-8">
            <a href="https://www.facebook.com/devisbaizid/" target="_blank" className="text-gray-300 hover:text-green-300 transition-all">
              <Facebook size={28} />
            </a>
            <a href="https://github.com/Mdbaizidtanvir" target="_blank" className="text-gray-300 hover:text-green-300 transition-all">
              <Github size={28} />
            </a>
            <a href="https://wa.me/01321284815" target="_blank" className="text-gray-300 hover:text-green-300 transition-all">
              <MessageCircle size={28} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-green-300/20 shadow-[0_0_20px_rgba(0,255,160,0.1)] hover:shadow-[0_0_35px_rgba(0,255,160,0.15)] transition-all duration-500"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full h-14 bg-[#262626] text-gray-200 placeholder-gray-400 text-lg rounded-full border border-gray-700 focus:outline-none focus:border-green-300 px-5 mb-6 transition"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-14 bg-[#262626] text-gray-200 placeholder-gray-400 text-lg rounded-full border border-gray-700 focus:outline-none focus:border-green-300 px-5 mb-6 transition"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full h-40 bg-[#262626] text-gray-200 placeholder-gray-400 text-lg rounded-2xl border border-gray-700 focus:outline-none focus:border-green-300 px-5 py-4 mb-6 resize-none transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 text-center text-black font-semibold rounded-full bg-green-400 shadow-md hover:bg-green-400 transition-all"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.form>

      </div>
    </section>
  );
}
