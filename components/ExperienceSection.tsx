"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    title: "Co-fundador",
    company: "Urumie",
    period: "Junio 2024 - Actualidad",
    description:
      "Urumie es una startup de tecnología incubada en CIE y aprobada por ANDE. Roles: Gerente de proyecto, desarrollador full-stack, diseñador, coordinador y planificador.",
  },
  {
    title: "Desarrollador Freelance",
    company: "Freelance",
    period: "Octubre 2024 - Actualidad",
    description: "Desarrollo de sitios web y aplicaciones móviles.",
  },
  {
    title: "IT Trainee",
    company: "Perceptiva S.R.L",
    period: "Junio 2022 - Agosto 2023",
    description:
      "Aprendizaje bajo demanda de diversas tecnologías, análisis y procesamiento de datos. Desarrollo de flujos de trabajo para automatizar tareas manuales. Python, Git, Postman, CRUDs. Soporte de nivel 1, 2 y 3.",
  },
  {
    title: "Cajero",
    company: "Mercados Devoto S.A.",
    period: "2021 - 2022",
    description: "Atención al cliente y manejo de caja.",
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experiencia Laboral</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-10 transition-all transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-2 text-purple-500">{exp.title}</h3>
              <h4 className="text-xl mb-2">{exp.company}</h4>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

