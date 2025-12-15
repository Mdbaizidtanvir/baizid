"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import quotewebp from "../public/quote.webp";
import client1 from "../public/client1.jpg";
import client2 from "../public/client2.webp";

export default function MyTestimonials() {
  const testimonials = [
   

      {
    id: 1,
    image: client1,
    name: "Yannickborer",
    role: "CEO of mankioficial.com",
    text:
      "Baizid developed our full-scale fashion ecommerce platform (mankioficial.com) from the ground up. His ability to deliver a fast, scalable, beautifully designed shopping experience exceeded all expectations. From product management to secure checkout and real-time updates, everything was built flawlessly. A highly reliable developer who truly understands business needs.",
  },
  {
    id: 2,
    image: "/client3.jpg",
    name: "Peeyush Shukla",
    role: "Chief Information Officer (heitman)",
    text:
      "Working with Baizid was a game changer. He delivered production-ready systems with clean architecture, strong API integrations, and seamless UI/UX. His ability to work independently and solve complex problems made our launch incredibly smooth.",
  },
  

  ];

  return (
    <section className="w-full py-20  rounded-xl relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-left mb-16 w-[90%] md:w-[70%] mx-auto relative z-10"
      >
        <h4 className="uppercase tracking-[0.35em] text-green-300/60 text-sm md:text-base">
          Testimonials
        </h4>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2 text-green-400 drop-shadow-[0_0_25px_rgba(0,255,160,0.25)]">
          Inspiring Feedback <br />
          <span className="text-white">from Clients</span>
        </h1>
      </motion.div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-[92%] md:w-[80%] mx-auto py-10"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-6 md:p-8 bg-black/30 backdrop-blur-xl rounded-2xl border border-green-300/20 shadow-[0_0_20px_rgba(0,255,160,0.1)] hover:shadow-[0_0_35px_rgba(0,255,180,0.15)] transition-all duration-500"
            >
              {/* Quote Icon */}
              <Image src={quotewebp} width={60} height={60} alt="quote" />

              {/* Stars */}
              <div className="flex mt-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="text-green-300 w-5 h-5" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm md:text-base mt-5 leading-relaxed tracking-[0.5px]">
                {item.text}
              </p>

              {/* Client Info */}
              <div className="flex mt-8 items-center gap-4">
                <Image
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-green-300"
                  src={item.image}
                />
                <div>
                  <h6 className="font-semibold text-green-400">{item.name}</h6>
                  <span className="text-gray-400 text-sm">{item.role}</span>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
