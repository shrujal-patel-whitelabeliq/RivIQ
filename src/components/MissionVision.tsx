"use client"

import React from "react"
import { motion } from "framer-motion"
import { Target, Telescope } from "lucide-react"

const cards = [
  {
    type: "Mission",
    icon: <Target size={28} className="text-primary" strokeWidth={1.5} />,
    tagline: "Why we exist",
    heading: "Our Mission",
    body: "We help businesses build digital products that are fast, structured, and purpose-built. Every website, application, or AI system we create is designed to solve a real problem — with clarity, not complexity.",
    accent: "bg-primary/8",
    border: "border-primary/20",
    iconBg: "bg-primary/10",
    highlight: "text-primary",
  },
  {
    type: "Vision",
    icon: <Telescope size={28} className="text-accent-blue" strokeWidth={1.5} />,
    tagline: "Where we are headed",
    heading: "Our Vision",
    body: "To be the long-term digital partner that growing companies rely on — one that understands both the technical and the human side of building software that lasts.",
    accent: "bg-accent-blue/8",
    border: "border-accent-blue/20",
    iconBg: "bg-accent-blue/10",
    highlight: "text-accent-blue",
  },
]

export const MissionVision = () => {
  return (
    <section
      id="mission-vision"
      className="py-24 px-6 relative overflow-hidden"
      aria-label="Mission and Vision"
    >
      {/* Subtle background texture blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Purpose &amp; Direction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-deep-slate"
          >
            Built on Clarity.{" "}
            <span className="text-muted-text/70">Driven by Purpose.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-muted-text text-lg leading-relaxed"
          >
            Two guiding statements that shape every decision we make — from how
            we scope a project to how we communicate with a client.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-16 origin-center"
        />

        {/* Two-column cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative p-8 md:p-10 rounded-3xl bg-white border ${card.border} shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden`}
            >
              {/* Card glow on hover */}
              <div
                className={`absolute inset-0 ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
              />

              <div className="relative z-10 space-y-6">
                {/* Icon + Tag row */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <span
                      className={`inline-block text-xs font-semibold uppercase tracking-widest ${card.highlight} mb-1`}
                    >
                      {card.tagline}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-deep-slate leading-tight">
                      {card.heading}
                    </h3>
                  </div>
                </div>

                {/* Subtle inner divider */}
                <div className={`h-px bg-gradient-to-r from-${card.border.replace("border-", "")} via-transparent to-transparent`} />

                {/* Body copy */}
                <p className="text-muted-text text-[1.05rem] leading-[1.8]">
                  {card.body}
                </p>
              </div>

              {/* Decorative corner element */}
              <div
                className={`absolute top-4 right-4 w-20 h-20 rounded-full ${card.iconBg} blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom anchor line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-text/60 mt-12"
        >
          These aren&apos;t statements we display on walls. They guide how we work,
          what we accept, and what we decline.
        </motion.p>
      </div>
    </section>
  )
}
