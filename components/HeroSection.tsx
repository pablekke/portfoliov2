"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import image from "@/public/assets/forcv11.jpg"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hola, soy{" "}
            <span className="text-purple-500 inline-block hover:scale-105 transition-transform">Pablo Suárez</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Estudiante avanzado de Analista Programador y desarrollador apasionado
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-96 md:h-96 relative">
            <div className="absolute inset-0 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500">
              <Image
                src={image}
                alt="Pablo Suárez"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 384px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full relative">
            <div className="w-1 h-2 bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

