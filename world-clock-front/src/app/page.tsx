'use client'

import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [clocks, setClocks] = useState<{ [city: string]: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/api/world-time')
      setClocks(response.data as { [city: string]: string })
    } catch (error) {
      alert('Erro ao buscar horários.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white p-4">
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition"
      >
        {loading ? 'Carregando...' : 'Clique aqui'}
      </button>

      {clocks && (
        <div className="mt-8 space-y-2 text-center">
          {Object.entries(clocks).map(([city, time]) => (
            <p key={city}>
              <strong>{city}:</strong> {time}
            </p>
          ))}
        </div>
      )}
    </main>
  )
}
