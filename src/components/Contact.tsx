"use client"

import React from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/50 backdrop-blur-2xl p-8 md:p-16 rounded-[4rem] border border-white shadow-2xl"
        >
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-slate">
              Start Your <br />
              <span className="text-primary">Transformation</span>
            </h2>
            <p className="text-muted-text">
              Have a project in mind? Let&apos;s discuss how we can help you build something extraordinary.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-deep-slate/60 pl-2">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-soft-gray focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-deep-slate/60 pl-2">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-2xl bg-white border border-soft-gray focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-deep-slate/60 pl-2">Project Type</label>
              <select className="w-full px-6 py-4 rounded-2xl bg-white border border-soft-gray focus:border-primary outline-none transition-all appearance-none">
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Mobile App</option>
                <option>Digital Marketing</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-deep-slate/60 pl-2">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-6 py-4 rounded-2xl bg-white border border-soft-gray focus:border-primary outline-none transition-all resize-none"
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-deep-slate text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/20 transition-all"
                type="button"
              >
                Request Proposal
                <Send size={20} />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent-blue/10 rounded-full blur-[100px] -z-10" />
    </section>
  )
}
