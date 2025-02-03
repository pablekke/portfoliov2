"use client"

import { motion } from "framer-motion"

const references = [
  {
    name: "Ricardo Zengin",
    position: "CEO Perceptiva",
    phone: "+598 92 435 399",
  },
  {
    name: "Pablo Geymonat",
    position: "Profesor en ORT",
    phone: "+598 91 634 555",
  },
  {
    name: "Alexander Von Rappard",
    position: "Ejecutivo CIE",
    phone: "+598 91 002 538",
  },
]

export default function ReferencesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Referencias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {references.map((ref, index) => (
          <motion.div
            key={ref.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-500">{ref.name}</h3>
            <p className="text-gray-300 mb-2">{ref.position}</p>
            <p className="text-gray-400">{ref.phone}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

