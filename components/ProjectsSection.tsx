"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "La Rotonda - Full Stack",
    description:
      "Sistema completo de restaurante con autenticación de usuarios, carrito de compras y pasarela de pagos. Desarrollado con React y tecnologías modernas.",
    link: "https://larotondacart.netlify.app/",
    features: ["Login/Registro", "Pasarela de Pago", "Carrito de Compras"],
    image: "/assets/cart.webp",
  },
  {
    title: "La Rotonda - Landing",
    description:
      "Versión landing page del restaurante, enfocada en la presentación del menú y la experiencia del usuario.",
    link: "https://larotonda.netlify.app/",
    features: ["Diseño Responsivo", "Menú Interactivo", "Optimización SEO"],
    image: '/assets/landing.webp',
  },
];

const FeatureTag = ({ children }: { children: string }) => (
  <span className="bg-purple-500 bg-opacity-20 text-purple-300 px-3 py-1 rounded-full text-sm">
    {children}
  </span>
);

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Últimos Proyectos
        </h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-xl shadow-2xl"
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-purple-600 transition-colors"
                        >
                          <ExternalLink size={20} />
                          Ver Proyecto
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1 space-y-4">
                  <motion.h3
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    className="text-2xl md:text-3xl font-bold text-purple-500"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                    className="text-gray-300"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.5 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.features.map((feature) => (
                      <FeatureTag key={feature}>{feature}</FeatureTag>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
