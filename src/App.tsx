import { useState, useEffect } from 'react';
import { Listed, UserListed } from './components/Listed';
import './App.css';

type GitHubInfos = {
  name: string;
  avatar_url: string;
}

export function App() {
  const [studentName, setStudentName] = useState<string>('');
  const [students, setStudents] = useState<UserListed[]>([]);

  function addPersonListed() {
    if (studentName.trim() === '') {
      return window.alert('[ERRO] Preencha o campo com um dado válido e tente novamente!')
    }

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

  const [userInfos, setUserInfos] = useState<GitHubInfos>({} as GitHubInfos);

  useEffect(() => {
    fetch('https://api.github.com/users/joaohenrik03')  
    .then(response => response.json())
    .then((data: GitHubInfos) => {
      setUserInfos({
        name: data.name,
        avatar_url: data.avatar_url
      })
    })
  });

  return (
    <div className="container">
      <header className='header'>
        <h1>
          Lista de presença
        </h1>
        <div className="header__logo">
          <strong>{userInfos.name}</strong>  
          <img src={userInfos.avatar_url} alt="Foto do Usuário" />
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