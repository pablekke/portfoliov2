"use client"

import { useState } from "react"

export const FizzBuzzChallenge = () => {
  const [number, setNumber] = useState("")
  const [result, setResult] = useState("")

  const handleFizzBuzz = () => {
    const num = Number.parseInt(number)
    if (isNaN(num)) {
      setResult("Por favor, ingresa un número válido.")
      return
    }

    let output = ""
    if (num % 3 === 0) output += "Fizz"
    if (num % 5 === 0) output += "Buzz"
    setResult(output || num.toString())
  }

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold mb-4">Reto FizzBuzz</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="bg-gray-700 text-white px-3 py-2 rounded mr-2"
        placeholder="Ingresa un número"
      />
      <button
        onClick={handleFizzBuzz}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
      >
        Calcular
      </button>
      {result && <p className="mt-4 text-lg">{result}</p>}
    </div>
  )
}

export const GuessTheNumber = () => {
  const [guess, setGuess] = useState("")
  const [feedback, setFeedback] = useState("")
  const [targetNumber] = useState(() => Math.floor(Math.random() * 100) + 1)
  const [attempts, setAttempts] = useState(0)

  const handleGuess = () => {
    const userGuess = Number.parseInt(guess)
    if (isNaN(userGuess)) {
      setFeedback("Por favor, ingresa un número válido.")
      return
    }

    setAttempts(attempts + 1)

    if (userGuess === targetNumber) {
      setFeedback(`¡Correcto! Lo adivinaste en ${attempts + 1} intentos.`)
    } else if (userGuess < targetNumber) {
      setFeedback("Demasiado bajo. Intenta de nuevo.")
    } else {
      setFeedback("Demasiado alto. Intenta de nuevo.")
    }
  }

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold mb-4">Adivina el Número</h3>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="bg-gray-700 text-white px-3 py-2 rounded mr-2"
        placeholder="Ingresa tu adivinanza"
      />
      <button
        onClick={handleGuess}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
      >
        Adivinar
      </button>
      {feedback && <p className="mt-4 text-lg">{feedback}</p>}
    </div>
  )
}

