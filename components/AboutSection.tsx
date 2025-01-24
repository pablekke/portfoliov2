"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all"
      >
        <p className="text-lg mb-4">
          Estudiante de segundo año de Analista Programador en ORT, apasionado por el mundo de la TI y autodidacta. Mis
          intereses personales están enfocados en el desarrollo de software.
        </p>
        <p className="text-lg mb-4">
          Me considero siempre a la vanguardia de las tecnologías, potenciando mis conocimientos para ser impecable y
          eficaz.
        </p>
        <p className="text-lg">
          Busco un rol que me dé la posibilidad de crecer profesional y académicamente, a cambio de compromiso,
          excelencia y profesionalismo.
        </p>
      </motion.div>
    </section>
  )
}

