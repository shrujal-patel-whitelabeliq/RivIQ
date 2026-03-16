"use client"

import React, { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Compass, FileText, Code, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    title: "Discovery",
    description: "We start by understanding what you need, why you need it, and what success looks like. This is where the most important decisions happen.",
    icon: <Compass size={28} className="text-primary" />,
  },
  {
    title: "Scope and Proposal",
    description: "A detailed scope document: what we build, how long it takes, what it costs. No ambiguity. No hidden fees.",
    icon: <FileText size={28} className="text-primary" />,
  },
  {
    title: "Design and Development",
    description: "Your dedicated team builds the solution. You see progress weekly, not at the end. Changes happen in real time.",
    icon: <Code size={28} className="text-primary" />,
  },
  {
    title: "QA and Launch",
    description: "Structured testing before anything goes live. Every device, every browser, every edge case we can find.",
    icon: <Rocket size={28} className="text-primary" />,
  },
  {
    title: "Support and Growth",
    description: "Launch is not the finish line. Updates, maintenance, new features, and scaling, for as long as you need us.",
    icon: <TrendingUp size={28} className="text-primary" />,
  },
]

export const HowWeWork = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  return (
    <section id="how-we-work" className="py-24 px-6 relative overflow-hidden bg-soft-gray/30" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-deep-slate"
          >
            What to Expect When You
            <span className="text-muted-text/70 text-5xl"> Work With Us</span>
          </motion.h2>
          <p className="text-muted-text max-w-2xl mx-auto text-lg mt-4">
            Five clear phases. No surprises. You see progress at every step, and nothing ships until it is ready.
          </p>

        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-1 bg-white md:-translate-x-1/2 rounded-full" />
          <motion.div
            className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-1 bg-primary md:-translate-x-1/2 rounded-full origin-top z-0"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={index} className="relative flex flex-col md:flex-row md:items-center w-full">

                  {/* Center Icon Indicator */}
                  <div className="absolute left-[40px] top-6 md:left-1/2 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center shadow-lg relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                      <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full pl-[90px] md:pl-0 md:w-[45%] ${isEven ? "md:pr-12 md:mr-auto md:text-right" : "md:pl-12 md:ml-auto md:text-left"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white p-6 md:p-8 rounded-3xl border border-soft-gray shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-deep-slate mb-3">{step.title}</h3>
                      <p className="text-muted-text leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
