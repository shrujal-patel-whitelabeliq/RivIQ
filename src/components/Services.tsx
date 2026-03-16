"use client"

import React from "react"
import { motion } from "framer-motion"
import { Layout, Palette, Megaphone, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Web Development",
    description: "Building fast, scalable, and secure web applications using modern technologies like Next.js, Laravel, and more.",
    icon: <Layout className="text-primary" size={32} />,
    color: "bg-primary/10",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that provide seamless digital experiences for your users.",
    icon: <Palette className="text-primary" size={32} />,
    color: "bg-primary/10",
  },
  {
    title: "Digital Marketing",
    description: "Helping brands grow their online presence through data-driven strategies and creative content marketing.",
    icon: <Megaphone className="text-primary" size={32} />,
    color: "bg-primary/10",
  },
  {
    title: "Mobile App Development",
    description: "Developing high-performance native and cross-platform mobile applications for iOS and Android.",
    icon: <Smartphone className="text-primary" size={32} />,
    color: "bg-primary/10",
  },
]

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2.5rem] bg-white border border-soft-gray shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
            >
              <div className={cn("inline-flex p-4 rounded-2xl mb-6 transition-transform duration-500 group-hover:scale-110", service.color)}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-deep-slate mb-4">{service.title}</h3>
              <p className="text-muted-text text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Floating accent blob in card */}
              <div className={cn("absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700", service.color)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
