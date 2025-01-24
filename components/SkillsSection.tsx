"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  "Proactivo",
  "Autodidacta",
  "Documentación de proyectos",
  "Trabajo en equipo",
  "Aprendizaje rápido",
  "Excelentes relaciones con clientes",
  "Responsable",
  "Creativo",
  "Metódico y ordenado",
  "Compromiso",
]

const technologies = [
  "React",
  "React Native",
  "Node.js",
  "Firebase",
  "Python",
  "JavaScript",
  "C# (ASP.NET)",
  "Java",
  "CSS",
  "HTML",
  "Git",
  "GitHub",
  "Postman",
  "REST API",
  "Google Cloud Platform",
  "AWS EC2",
  "Jira",
  "Zendesk",
  "SQL Server",
  "MER",
  "UML",
]

const SkillTag = ({ children, index }: { children: string; index: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
      className="bg-white bg-opacity-10 rounded-full px-4 py-2 text-sm inline-block m-1"
    >
      {children}
    </motion.span>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Habilidades y Conocimientos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-500">Habilidades Personales</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <SkillTag key={skill} index={index}>
                  {skill}
                </SkillTag>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-500">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <SkillTag key={tech} index={index}>
                  {tech}
                </SkillTag>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

