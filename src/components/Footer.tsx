"use client"

import React from "react"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, Instagram } from "lucide-react"
import { Logo } from "./Logo"

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-soft-gray">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Logo className="w-8 h-8 text-primary" />
              <span className="font-bold text-lg tracking-tight text-deep-slate">Rivulet IQ</span>
            </div>
            <p className="text-muted-text max-w-sm">
              Leading the way in full-stack web development and digital transformation. Delivering smooth, futuristic interfaces for global brands.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Github size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-deep-slate mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-muted-text">
              <li><a href="#" className="hover:text-accent-blue transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent-blue transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-accent-blue transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-accent-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-deep-slate mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-text">
              <li>hello@rivuletiq.io</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Future Lane, Tech City, CA</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-soft-gray flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-muted-text uppercase tracking-widest">
          <p>© 2026 Rivulet IQ. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-accent-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <motion.a
    href="#"
    whileHover={{ y: -3, scale: 1.1 }}
    className="w-10 h-10 rounded-full bg-soft-gray flex items-center justify-center text-deep-slate hover:bg-primary hover:text-white transition-all"
  >
    {icon}
  </motion.a>
)
