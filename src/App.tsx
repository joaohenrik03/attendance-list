import { useState } from 'react';
import { Listed, UserListed } from './components/Listed';
import './App.css';

export function App() {
  const [studentName, setStudentName] = useState<string>('');
  const [students, setStudents] = useState<UserListed[]>([]);

  function addPersonListed() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
    setStudentName('');
  }

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
          onChange={e => setStudentName(e.target.value)}
          value={studentName}
        />
        <button onClick={addPersonListed}>
          Adicionar
        </button>

        {
          students.map(student => 
          <Listed 
            name={student.name} 
            time={student.time}
            key={student.time}
          />)
        }
      </div>
    </div>
  )
}