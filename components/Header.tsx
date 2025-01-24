"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Header() {
  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-md fixed top-0 left-0 right-0 z-30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold">PS</h2>
        </motion.div>
        <nav>
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-4"
          >
            <li>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pablo-suarez1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
          </motion.ul>
        </nav>
      </div>
    </header>
  )
}

