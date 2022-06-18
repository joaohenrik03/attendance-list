import { useState } from 'react'
import './App.css'

export function App() {
  return (
    <div className="container">
      <header className='header'>
        <h1>
          Lista de presença
        </h1>
        <div className="header__logo">
          <strong>João Henrik</strong>  
          <img src="https://github.com/joaohenrik03.png" alt="Foto do Usuário" />
        </div> 
      </header>  

      <div className="form">
        <label 
          htmlFor="nameInput" 
          className='sr-only'
        >
          Digite o nome:
        </label>
        <input
          id='nameInput'
          type="text"
          placeholder='Digite o nome'
        />
        <button>
          Adicionar
        </button>
      </div>
    </div>
  )
}