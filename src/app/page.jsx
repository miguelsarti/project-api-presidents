"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Page() {
  const [presidente, setPresidente] = useState([])
  const [loading, setLoading] = useState(false)

  const buscarPresidente = async () => {
    setLoading(true)
    try {
      const response = await axios.get("https://api.sampleapis.com/presidents/presidents")
      const data = response.data;
      setPresidente(data)
      console.table(data)
    } catch (error) {
      console.error('Erro ao buscar presidentes:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h screen bg-blue-100 p-8 text-center">
      <div className="mx-auto text-center mb-12">
        <h1 className="text-center font-bold">Presidentes</h1>
        <div className="text-center mt-10 mb-8">
          <div className="mm-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={buscarPresidente} disabled={loading}>
              {loading ? "Carregando..." : "Buscar Presidentes"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {presidente.map((presidente) => (

          <div className="bg-white p-6 rounded-lg shadow-md" key={presidente.id}>
            
            <img src={presidente.photo} className="w-full h-140 object-cover mt-4 mx-auto"  alt="Foto do presidente" />
            <h3 className="font-bold text-lg text-gray-800">Nome: {presidente.name}</h3>
            <p className="text-gray-600">Anos na posse: {presidente.yearsInOffice}</p>
            <p className="text-gray-900">Ordem das posses: {presidente.ordinal}</p>
            <p className="text-gray-900">Vice-presidente: {presidente.vicePresidents}</p>

          </div>
        ))}
      </div>

    </div>
  )
}
