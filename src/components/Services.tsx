"use client"

import React from "react"
import { motion } from "framer-motion"
import { MagicBento } from "./MagicBento"

const servicesData = [
  {
    title: "Web Development",
    description: "Building fast, scalable, and secure web applications using modern technologies like Next.js, Laravel, and React.",
    label: "Core"
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful interfaces for seamless experiences.",
    label: "Creative"
  },
  {
    title: "AI Solutions",
    description: "Integrating powerful AI models into your workflows.",
    label: "Innovation"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your organic reach.",
    label: "Growth"
  },
  {
    title: "eCommerce Development",
    description: "Shopify, WooCommerce, BigCommerce. Product catalogs, payment integrations, inventory systems, and checkout optimization. Built to sell, not just to look good.",
    label: "Commerce"
  },
  {
    title: "Mobile App Development",
    description: "Developing high-performance native and cross-platform mobile apps for iOS and Android.",
    label: "Mobile"
  },
  {
    title: "Cloud Architecture",
    description: "Deploying and scaling applications on AWS and Vercel.",
    label: "Infrastructure"
  }
]

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative bg-soft-gray/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-deep-slate"
          >
            Digital Services Designed <br />
            <span className="text-muted-text/70 text-5xl lowercase">to elevate your business</span>
          </motion.h2>
          <p className="text-muted-text max-w-2xl mx-auto">
            From strategy to execution, we provide comprehensive digital solutions that drive results and foster growth.
          </p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1, duration: 0.7 }}
        >
          <MagicBento 
            data={servicesData}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="59, 130, 246" // primary blue matching antialiased bg-primary
          />
        </motion.div>
      </div>
    </section>
  )
}
