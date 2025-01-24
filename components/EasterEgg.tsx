"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

type EasterEggProps = {
  trigger: string
  children: React.ReactNode
}

export const EasterEgg: React.FC<EasterEggProps> = ({ trigger, children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [sequence, setSequence] = useState("")

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setSequence((prev) => (prev + event.key).slice(-trigger.length))
    }

    window.addEventListener("keydown", handleKeyPress)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [trigger])

  useEffect(() => {
    if (sequence === trigger) {
      setIsVisible(true)
    }
  }, [sequence, trigger])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsVisible(false)}
        >
          <div className="bg-gray-800 p-6 rounded-lg max-w-md" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

