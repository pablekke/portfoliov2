"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function EasterEggHint() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10000) // Show hint after 10 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-20 left-4 text-sm text-gray-400 z-40"
        >
          <p className="bg-gray-800 px-4 py-2 rounded-lg shadow-lg">Psst... Intenta escribir &quot;fizz&quot; o &quot;guess&quot; 🎮</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

