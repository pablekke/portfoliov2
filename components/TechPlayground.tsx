"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Server, Database } from "lucide-react"

const technologies = [
  { name: "React", icon: Code, color: "text-blue-500" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "SQL", icon: Database, color: "text-yellow-500" },
]

const TechPlayground = () => {
  const [activeTech, setActiveTech] = useState(technologies[0])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Explora Mis Tecnologías</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {technologies.map((tech) => (
            <motion.button
              key={tech.name}
              onClick={() => setActiveTech(tech)}
              className={`px-4 py-2 rounded-full ${
                activeTech.name === tech.name ? "bg-purple-500 text-white" : "bg-gray-800 text-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech.name}
            </motion.button>
          ))}
        </div>
        <motion.div
          key={activeTech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <div className="flex items-center mb-4">
            <activeTech.icon className={`w-8 h-8 ${activeTech.color} mr-4`} />
            <h3 className="text-2xl font-semibold">{activeTech.name}</h3>
          </div>
          <div className="h-64 overflow-hidden rounded-lg">
            {activeTech.name === "React" && (
              <iframe
                src="https://codesandbox.io/embed/react-playground-forked-gm14t4?fontsize=14&hidenavigation=1&theme=dark"
                className="w-full h-full border-0"
                title="React Playground"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            )}
            {activeTech.name === "Node.js" && (
              <iframe
                src="https://codesandbox.io/embed/node-http-server-forked-x4cnkt?fontsize=14&hidenavigation=1&theme=dark"
                className="w-full h-full border-0"
                title="Node.js Playground"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              />
            )}
            {activeTech.name === "SQL" && (
              <iframe src="https://sqliteonline.com/" className="w-full h-full border-0" title="SQL Playground" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechPlayground

