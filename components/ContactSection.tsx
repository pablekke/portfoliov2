"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa"

export default function ContactSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-4">
            <FaEnvelope size={24} className="text-purple-500" />
            <a href="mailto:sb.paablo@gmail.com" className="text-lg hover:text-purple-500 transition-colors">
              sb.paablo@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone size={24} className="text-purple-500" />
            <a href="tel:+59892202919" className="text-lg hover:text-purple-500 transition-colors">
              +598 92 202 919
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt size={24} className="text-purple-500" />
            <span className="text-lg">Montevideo, Uruguay</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin size={24} className="text-purple-500" />
            <a
              href="https://www.linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-purple-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

