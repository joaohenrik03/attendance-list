import { useState } from 'react'
import './App.css'

export function App() {
  return (
    <div className="container">
      <header>
        <h1>
          Lista de presença
        </h1>
        <div className="logo">
          <strong>João Henrik</strong>  
          <img src="https://github.com/joaohenrik03.png" alt="Foto do Usuário" />
        </div> 
      </header>  

      <label htmlFor="">Digite o nome:</label>
      <input 
        type="text" 
        placeholder='Digite o nome'
      />

      <button>
        Adicionar
      </button>
    </div>
  )
}