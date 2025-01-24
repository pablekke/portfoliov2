"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const AnimatedIntro = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      targetX: number
      targetY: number
    }> = []

    const initParticles = () => {
      const text = "PS"
      ctx.font = "bold 200px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(text, canvas.width / 2, canvas.height / 2)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let y = 0; y < imageData.height; y += 5) {
        for (let x = 0; x < imageData.width; x += 5) {
          if (imageData.data[y * 4 * imageData.width + x * 4 + 3] > 128) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              size: Math.random() * 2 + 1,
              speedX: Math.random() * 2 - 1,
              speedY: Math.random() * 2 - 1,
              targetX: x,
              targetY: y,
            })
          }
        }
      }
    }

    initParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        const dx = particle.targetX - particle.x
        const dy = particle.targetY - particle.y
        particle.x += dx * 0.05
        particle.y += dy * 0.05

        ctx.fillStyle = "rgba(147, 51, 234, 0.8)"
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      initParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3 }}
      className="fixed inset-0 z-50 bg-black"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}

export default AnimatedIntro

