"use client";

import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";

export const WhyChooseUs = () => {
  const points = [
    { title: "Structured Development Process" },
    { title: "Performance-First Mindset" },
    { title: "Clear Communication" },
    { title: "Reliable Delivery" },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-slate mb-6">Why Rivulet</h2>
          <p className="text-xl text-muted-text mb-12">
            We focus on long-term value instead of short-term fixes. Our work is structured, scalable, and aligned with real business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((pt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-soft-gray/50 p-6 rounded-2xl flex items-center justify-center border border-soft-gray hover:border-primary/20 transition-colors"
            >
              <h3 className="text-xl font-bold text-deep-slate">{pt.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
