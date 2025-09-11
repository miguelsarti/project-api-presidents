"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Header from '../components/Header/page'

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
    <div className="min-h screen h-15 bg-blue-100 p-8 text-center mx-auto">
      <Header />
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

      <div className="flex justify-center items-center flex-wrap gap-6">
  {presidente.map((presidente) => (
    <div className="bg-white p-6 max-w-md w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" key={presidente.id}>
      <img 
        src={presidente.photo} 
        className="w-full h-120 object-cover rounded-t-lg mb-4" 
        alt={`Foto do presidente ${presidente.name}`} 
      />
      <h3 className="font-bold text-2xl text-gray-800 mb-2">Nome: {presidente.name}</h3>
      <p className="text-gray-600 mb-1">Anos na posse: {presidente.yearsInOffice}</p>
      <p className="text-gray-600 mb-1">Ordem das posses: {presidente.ordinal}</p>
      <p className="text-gray-600">Vice-presidente: {presidente.vicePresidents}</p>
    </div>
  ))}
</div>

    </div>
  )
}

