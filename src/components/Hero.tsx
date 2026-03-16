"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Globe, Code } from "lucide-react"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center overflow-hidden">
      {/* Floating UI Elements */}
      <FloatingCard
        className="absolute top-[20%] left-[10%] hidden lg:block"
        icon={<Code className="text-primary" size={20} />}
        title="Scalable Code"
        delay={0}
      />
      <FloatingCard
        className="absolute top-[15%] right-[15%] hidden lg:block"
        icon={<Globe className="text-light-blue" size={20} />}
        title="Global Delivery"
        delay={0.5}
      />
      <FloatingCard
        className="absolute bottom-[25%] left-[15%] hidden lg:block"
        icon={<Sparkles className="text-accent-blue" size={20} />}
        title="Digital Magic"
        delay={1}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-soft-gray border border-white/50 text-sm font-medium animate-float">
          <Sparkles size={16} className="text-primary" />
          <span>Innovating the Future of Tech</span>
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-deep-slate">

          <span className="text-muted-text/80"> We Build What Your</span> <br />
          <span className="relative inline-block">
            Business Needs Next
            <motion.svg
              className="absolute -bottom-4 left-0 w-full"
              viewBox="0 0 400 20"
              fill="none"
            >
              <motion.path
                d="M0 10 Q100 0 200 10 T400 10"
                stroke="#6A89A7"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
            </motion.svg>
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-text leading-relaxed">
          Full-service web development, ecommerce, SaaS platforms, and AI solutions. A 90+ engineer team in Ahmedabad, delivering for clients across the USA, Middle East, Australia, and the UK.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-deep-slate font-bold text-white hover:bg-primary transition-all shadow-lg hover:shadow-xl"
          >
            Get a Quote
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-white border border-soft-gray font-bold text-deep-slate hover:bg-soft-gray/50 transition-colors"
          >
            Schedule Consultation
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

const FloatingCard = ({ className, icon, title, delay }: { className: string, icon: React.ReactNode, title: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: [0, -10, 0],
    }}
    transition={{
      opacity: { duration: 0.5, delay },
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }
    }}
    className={cn(
      "p-4 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/50 shadow-lg flex items-center gap-3",
      className
    )}
  >
    <div className="p-2 rounded-xl bg-background/50">{icon}</div>
    <span className="text-sm font-semibold text-deep-slate pr-2">{title}</span>
  </motion.div>
)

import { cn } from "@/lib/utils"
