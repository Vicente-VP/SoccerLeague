import './App.css';
import ListaTeams from './Componentes/Listateams';
import axios from 'axios';
import {useEffect, useState} from 'react';
import BarraMenu from './Componentes/BarraMenu';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(()=>{
    carregaTeams();
  }, []);

  function carregaTeams(){
      axios.get('https://project-ea-football.onrender.com/teams')
      .then (res=>{
        setTeams(res.data);
      console.log(teams);
  });
  }
  return (
    <div className='principal'>
      <BarraMenu/>
      <center><h1>Bem Vindo a Soccer League</h1></center>
      <div className='teams-section'>
        <h2>Lista de Times</h2>
        <ListaTeams teams={teams} carregaTeams={carregaTeams} excluir={false}></ListaTeams>
      </div>
    </div>
  );
}

export default App;