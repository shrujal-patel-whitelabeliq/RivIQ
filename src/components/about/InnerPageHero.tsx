"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const InnerPageHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[80vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-soft-gray border border-white/50 text-sm font-medium text-primary">
            About Us
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-deep-slate">
            Building Digital <span className="text-primary">Foundations</span> That Grow With Your Business
          </h1>

          <p className="text-lg md:text-xl text-muted-text leading-relaxed max-w-xl">
            At Rivulet, we create structured and scalable digital solutions designed for long-term success. Our approach focuses on clarity, performance, and adaptability so your website or application can evolve as your business grows.
          </p>

          <div className="pt-4">
            <Link href="#contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-deep-slate font-bold text-white hover:bg-primary transition-all shadow-lg hover:shadow-xl"
              >
                Let&apos;s Talk
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[400px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
              alt="Digital abstract gradient workspaces"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
