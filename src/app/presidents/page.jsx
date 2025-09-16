"use client"

import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import styles from './presidents.module.css'


export default function Page() {
  const [presidente, setPresidente] = useState([])
  const [loading, setLoading] = useState(false)

  const buscarPresidente = async () => {
    setLoading(true)
    try {
      const response = await axios.get("https://api.sampleapis.com/presidents/presidents")
      setPresidente(response.data)
    } catch (error) {
      console.error('Erro ao buscar presidentes:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    
    <div className={styles.top}>
            
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>Ordem Cronológica dos Presidentes</h1>
        <button
          className={styles.button}
          onClick={buscarPresidente}
          disabled={loading}
        >
          {loading ? "Carregando..." : "Buscar Presidentes"}
        </button>

        <section className={styles.grid}>
          {presidente.map((president) => (
            <div
              key={president.id}
              className={styles.card}
            >
              <img
                src={president.photo}
                alt={`Foto do presidente ${president.name}`}
                className={styles.image}
                onError={e => { e.target.src = '/img/my-pic.jpg'; }}
              />
              <h2 className={styles.name}>{president.name}</h2>
              <p className={styles.years}><strong>Anos na posse:</strong> {president.yearsInOffice}</p>
              <p className={styles.ordinal}><strong>Ordem:</strong> {president.ordinal}</p>
              <p className={styles.vice}><strong>Vice-presidente:</strong> {president.vicePresidents}</p>
            </div>
          ))}
        </section>
      </main> 
    </div>
    </div>
  )
}

