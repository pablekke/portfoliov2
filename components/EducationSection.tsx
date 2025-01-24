"use client"

import { motion } from "framer-motion"

const education = [
  {
    title: "Analista Programador",
    institution: "Universidad ORT",
    period: "2023 - Actualidad",
    description:
      "Promedio de calificaciones: 94%. Aprobaciones destacadas en Programación 3 (ASP.NET 8.0 MVC, WebAPI, Entity Framework), Bases de datos (SQL Server 2022), y Front end (React).",
  },
  {
    title: "Ingeniería de Sistemas",
    institution: "Facultad de Ingeniería, Udelar",
    period: "2023 - 2024",
    description: "Promedio de calificaciones: 70.25%",
  },
]

const certifications = [
  "Professional Cloud Architect - Google",
  "Complete Python Bootcamp From Zero to Hero in Python - Udemy",
  "Data Manipulation in Python: Master Python, Numpy & Pandas - Udemy",
  "Javascript For Beginners Complete Course - Udemy",
]

export default function EducationSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Educación y Certificaciones</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all"
          >
            <h3 className="text-2xl font-semibold mb-2 text-purple-500">{edu.title}</h3>
            <h4 className="text-xl mb-2">{edu.institution}</h4>
            <p className="text-gray-400 mb-2">{edu.period}</p>
            <p className="text-gray-300">{edu.description}</p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-500">Certificaciones</h3>
          <ul className="list-disc list-inside">
            {certifications.map((cert) => (
              <li key={cert} className="mb-2">
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

