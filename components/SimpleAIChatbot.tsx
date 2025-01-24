"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

const responses = {
  habilidades: "Mis principales habilidades incluyen React, Node.js, Python, y desarrollo full-stack.",
  experiencia: "Tengo experiencia en desarrollo web, creación de APIs, y gestión de bases de datos.",
  proyectos: "He trabajado en proyectos como un sistema de gestión para restaurantes y aplicaciones web responsivas.",
  educacion: "Soy estudiante avanzado de Analista Programador en la Universidad ORT.",
  contacto: "Puedes contactarme en sb.paablo@gmail.com o a través de mi perfil de LinkedIn.",
  default:
    "Lo siento, no tengo información específica sobre eso. ¿Puedo ayudarte con algo más relacionado con mis habilidades, experiencia, proyectos o educación?",
}

export const SimpleAIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    {
      text: "¡Hola! Puedo responder preguntas sobre Pablo 😉",
      isUser: false,
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim() === "") return

    setMessages((prev) => [...prev, { text: input, isUser: true }])

    const lowercaseInput = input.toLowerCase()
    let response = responses.default
    for (const [key, value] of Object.entries(responses)) {
      if (lowercaseInput.includes(key)) {
        response = value
        break
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, isUser: false }])
    }, 500)

    setInput("")
  }

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-purple-500 text-white p-3 rounded-full shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 bg-gray-800 rounded-lg shadow-xl overflow-hidden z-40"
          >
            <div className="flex justify-between items-center bg-purple-500 p-4">
              <h3 className="text-white font-bold">Chat con Pablo AI</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} className="text-white" />
              </button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-3/4 p-2 rounded-lg ${msg.isUser ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-200"}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-700">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-grow bg-gray-700 text-white px-3 py-2 rounded-l-md focus:outline-none"
                  placeholder="Pregunta algo..."
                />
                <button
                  onClick={handleSend}
                  className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:bg-purple-600 transition-colors"
                >
                  Enviar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

